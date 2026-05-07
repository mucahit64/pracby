import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { Resend } from "resend";
import db from "../../db/knex";
import { env } from "../../config/env";
import { AppError } from "../../middleware/error";
import type { RegisterInput, LoginInput, ForgotPasswordInput, ResetPasswordInput } from "./auth.schema";

const resend = new Resend(env.resendApiKey);

const BCRYPT_ROUNDS = 12;

const signToken = (userId: string, username: string): string =>
  jwt.sign({ userId, username }, env.jwtSecret, { expiresIn: "7d" });

export const register = async (input: RegisterInput) => {
  const emailExists = await db("users").where({ email: input.email }).first();
  if (emailExists) throw new AppError(409, "Email already in use");

  const usernameExists = await db("users").where({ username: input.username }).first();
  if (usernameExists) throw new AppError(409, "Username already taken");

  const passwordHash = await bcrypt.hash(input.password, BCRYPT_ROUNDS);

  let examTypeId = input.exam_type_id;
  if (!examTypeId) {
    const defaultType = await db("exam_types").where({ slug: "lisans" }).first();
    examTypeId = defaultType?.id;
  }

  const [user] = await db("users")
    .insert({
      email: input.email,
      username: input.username,
      password_hash: passwordHash,
      acorn_balance: input.acorn_balance ?? 500,
      energy: input.energy ?? 25,
      ...(examTypeId && { active_exam_type_id: examTypeId }),
    })
    .returning(["id", "email", "username", "active_exam_type_id", "created_at"]);

  await db("user_stats").insert({ user_id: user.id });

  if (examTypeId) {
    await db("user_exam_enrollments").insert({ user_id: user.id, exam_type_id: examTypeId });
  }

  // Apply guest quiz progress if provided
  if (input.guest_data?.quiz_results?.length) {
    const stepIds = [...new Set(input.guest_data.quiz_results.map((r) => r.stepId).filter(Boolean))] as string[];
    if (stepIds.length > 0) {
      const steps = await db("steps").whereIn("id", stepIds).select("id", "tests_required");
      const stepMap = new Map(steps.map((s) => [s.id as string, s.tests_required as number]));

      const totalCorrect = input.guest_data.quiz_results.reduce((sum, r) => sum + r.correctCount, 0);
      if (totalCorrect > 0) {
        await db("user_stats").where({ user_id: user.id }).increment({ xp: totalCorrect, total_xp: totalCorrect });
      }

      const stepProgressRows = stepIds.map((stepId) => {
        const results = input.guest_data!.quiz_results!.filter((r) => r.stepId === stepId);
        const completedTestIds = new Set(results.filter((r) => r.testId).map((r) => r.testId!));
        const completedTests = completedTestIds.size > 0 ? completedTestIds.size : (results.length > 0 ? 1 : 0);
        const testsRequired = stepMap.get(stepId) ?? 1;
        const isCompleted = completedTests >= testsRequired;
        return {
          user_id: user.id,
          step_id: stepId,
          tests_completed: completedTests,
          is_step_completed: isCompleted,
          step_final_passed: false,
          stars: 0,
          ...(isCompleted && { completed_at: new Date() }),
        };
      });

      await db("user_step_progress").insert(stepProgressRows).onConflict(["user_id", "step_id"]).merge();
    }
  }

  // Apply guest claimed rewards if provided
  if (input.guest_data?.claimed_reward_step_ids?.length) {
    const rewardStepIds = input.guest_data.claimed_reward_step_ids;

    const claimInserts = rewardStepIds.map((stepId) => ({
      user_id: user.id,
      step_id: stepId,
    }));
    await db("user_reward_claims")
      .insert(claimInserts)
      .onConflict(["user_id", "step_id"])
      .ignore();

    const rewardProgressInserts = rewardStepIds.map((stepId) => ({
      user_id: user.id,
      step_id: stepId,
      is_step_completed: true,
      tests_completed: 0,
    }));
    await db("user_step_progress")
      .insert(rewardProgressInserts)
      .onConflict(["user_id", "step_id"])
      .merge({ is_step_completed: true });
  }

  return { user, token: signToken(user.id as string, user.username as string) };
};

export const login = async (input: LoginInput) => {
  const isEmail = input.identifier.includes("@");
  const user = isEmail
    ? await db("users").where({ email: input.identifier }).first()
    : await db("users").where({ username: input.identifier }).first();
  if (!user) throw new AppError(401, "Invalid credentials");

  const valid = await bcrypt.compare(input.password, user.password_hash as string);
  if (!valid) throw new AppError(401, "Invalid credentials");

  return {
    user: { id: user.id, email: user.email, username: user.username },
    token: signToken(user.id as string, user.username as string),
  };
};

export const mergeGuestProgress = async (
  userId: string,
  quizResults: { topicId: string; stepId?: string; testId?: string; correctCount: number; totalQuestions: number }[],
  claimedRewards: string[] = [], // YENİ: Misafirin açtığı sandıkların ID'leri
  earnedAcorns: number = 0       // YENİ: Misafirin kazandığı palamutlar
) => {
  // Eğer aktarılacak hiçbir şey yoksa direkt çık
  if (!quizResults.length && !claimedRewards.length && earnedAcorns === 0) {
    return { merged: false };
  }

  // Tüm süreci Transaction içine alıyoruz ki hata olursa yarım kalmasın
  return db.transaction(async (trx) => {
    let newXp = 0;

    // ==========================================
    // 1. NORMAL TESTLERİN AKTARILMASI (Mevcut mantığın)
    // ==========================================
    const stepIds = [...new Set(quizResults.map((r) => r.stepId).filter(Boolean))] as string[];
    
    if (stepIds.length > 0) {
      const steps = await trx("steps").whereIn("id", stepIds).select("id", "tests_required");
      const stepMap = new Map(steps.map((s) => [s.id as string, s.tests_required as number]));

      const existingProgress = await trx("user_step_progress")
        .where({ user_id: userId })
        .whereIn("step_id", stepIds);
      const existingMap = new Map(existingProgress.map((p) => [p.step_id as string, p]));

      for (const stepId of stepIds) {
        const results = quizResults.filter((r) => r.stepId === stepId);
        const completedTestIds = new Set(results.filter((r) => r.testId).map((r) => r.testId!));
        const guestTestsCompleted = completedTestIds.size > 0 ? completedTestIds.size : (results.length > 0 ? 1 : 0);
        const testsRequired = stepMap.get(stepId) ?? 1;
        const guestIsCompleted = guestTestsCompleted >= testsRequired;

        const existing = existingMap.get(stepId);

        if (!existing) {
          await trx("user_step_progress").insert({
            user_id: userId,
            step_id: stepId,
            tests_completed: guestTestsCompleted,
            is_step_completed: guestIsCompleted,
            step_final_passed: false,
            stars: 0,
            ...(guestIsCompleted && { completed_at: new Date() }),
          });
          const stepXp = results.reduce((sum, r) => sum + r.correctCount, 0);
          newXp += stepXp;
        } else if (guestTestsCompleted > (existing.tests_completed as number)) {
          await trx("user_step_progress")
            .where({ id: existing.id })
            .update({
              tests_completed: guestTestsCompleted,
              is_step_completed: guestIsCompleted,
              ...(guestIsCompleted && !existing.is_step_completed && { completed_at: new Date() }),
            });
          const deltaTests = guestTestsCompleted - (existing.tests_completed as number);
          const sortedResults = [...results].sort((a, b) => b.correctCount - a.correctCount);
          const deltaXp = sortedResults.slice(0, deltaTests).reduce((sum, r) => sum + r.correctCount, 0);
          newXp += deltaXp;
        }
      }
    }

    // ==========================================
    // 2. ÖDÜL SANDIKLARININ (REWARDS) AKTARILMASI
    // ==========================================
    if (claimedRewards.length > 0) {
      // a. user_reward_claims tablosuna ekle (Aynı sandığı tekrar açmasın diye)
      const claimInserts = claimedRewards.map((stepId) => ({
        user_id: userId,
        step_id: stepId,
      }));
      await trx("user_reward_claims")
        .insert(claimInserts)
        .onConflict(["user_id", "step_id"])
        .ignore(); // Zaten varsa hata verme, atla

      // b. user_step_progress tablosuna "Tamamlandı" olarak ekle (Frontend mavi tik yapsın diye)
      const rewardProgressInserts = claimedRewards.map((stepId) => ({
        user_id: userId,
        step_id: stepId,
        is_step_completed: true,
        tests_completed: 0,
      }));
      await trx("user_step_progress")
        .insert(rewardProgressInserts)
        .onConflict(["user_id", "step_id"])
        .merge({ is_step_completed: true });
    }

    // ==========================================
    // 3. XP VE PALAMUT (ACORN) GÜNCELLEMESİ
    // ==========================================
    if (newXp > 0) {
      await trx("user_stats")
        .where({ user_id: userId })
        .increment({ xp: newXp, total_xp: newXp });
    }

    if (earnedAcorns > 0) {
      // Users tablosundaki bakiyeyi artır
      await trx("users")
        .where({ id: userId })
        .increment("acorn_balance", earnedAcorns);
      
      // İşlemi geçmiş (log) tablosuna kaydet
      await trx("acorn_transactions").insert({
        user_id: userId,
        amount: earnedAcorns,
        type: "guest_sync",
      });
    }

    return { merged: true, xp_awarded: newXp, acorns_awarded: earnedAcorns };
  });
};

export const checkEmail = async (email: string) => {
  const exists = await db("users").where({ email }).first();
  return { available: !exists };
};

export const checkUsername = async (username: string) => {
  const exists = await db("users").where({ username }).first();
  return { available: !exists };
};

const PASSWORD_RESET_EXPIRY_MS = 60 * 60 * 1000; // 1 saat

export const forgotPassword = async (input: ForgotPasswordInput): Promise<void> => {
  const SUCCESS_MESSAGE = "Eğer bu e-posta kayıtlıysa, şifre sıfırlama bağlantısı gönderildi.";

  const user = await db("users").where({ email: input.email }).first();

  // Kullanıcı bulunsun ya da bulunmasın aynı yanıtı döndür (enumeration koruması)
  if (!user) return;

  // Önceki tüm kullanılmamış tokenları geçersiz kıl
  await db("password_reset_tokens")
    .where({ user_id: user.id, used_at: null })
    .update({ used_at: db.fn.now() });

  // Yeni token oluştur
  const rawToken = crypto.randomBytes(32).toString("hex"); // 64 char hex
  const tokenHash = crypto.createHash("sha256").update(rawToken).digest("hex");
  const expiresAt = new Date(Date.now() + PASSWORD_RESET_EXPIRY_MS);

  await db("password_reset_tokens").insert({
    user_id: user.id,
    token_hash: tokenHash,
    expires_at: expiresAt,
  });

  const resetUrl = `${env.appUrl}/auth/reset-password?token=${rawToken}`;

  await resend.emails.send({
    from: "pracby <noreply@pracby.com>",
    to: user.email as string,
    subject: "Şifre Sıfırlama",
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px 24px;">
        <h2 style="color:#7C3AED;margin-bottom:8px;">pracby</h2>
        <p style="color:#374151;font-size:16px;">Merhaba <strong>${user.username}</strong>,</p>
        <p style="color:#374151;font-size:15px;">Şifre sıfırlama talebinde bulundun. Aşağıdaki butona tıklayarak yeni şifreni belirleyebilirsin.</p>
        <a href="${resetUrl}" style="display:inline-block;margin:24px 0;padding:14px 28px;background:#7C3AED;color:#fff;text-decoration:none;border-radius:12px;font-weight:700;font-size:15px;">Şifremi Sıfırla</a>
        <p style="color:#6B7280;font-size:13px;">Bu bağlantı <strong>1 saat</strong> geçerlidir.</p>
        <p style="color:#6B7280;font-size:13px;">Bu talebi sen yapmadıysan bu e-postayı dikkate alma.</p>
      </div>
    `,
  });
};

export const resetPassword = async (input: ResetPasswordInput): Promise<void> => {
  const tokenHash = crypto.createHash("sha256").update(input.token).digest("hex");

  const record = await db("password_reset_tokens")
    .where({ token_hash: tokenHash, used_at: null })
    .where("expires_at", ">", db.fn.now())
    .first();

  if (!record) {
    throw new AppError(400, "Geçersiz veya süresi dolmuş bağlantı");
  }

  const newPasswordHash = await bcrypt.hash(input.password, BCRYPT_ROUNDS);

  await db.transaction(async (trx) => {
    await trx("users")
      .where({ id: record.user_id })
      .update({ password_hash: newPasswordHash });

    await trx("password_reset_tokens")
      .where({ id: record.id })
      .update({ used_at: trx.fn.now() });
  });
};
