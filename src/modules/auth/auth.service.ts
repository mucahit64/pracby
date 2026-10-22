import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { Resend } from "resend";
import type { Knex } from "knex";
import db from "../../db/knex";
import { env } from "../../config/env";
import { AppError } from "../../middleware/error";
import type { RegisterInput, LoginInput, ForgotPasswordInput, ResetPasswordInput } from "./auth.schema";

const resend = new Resend(env.resendApiKey);

const BCRYPT_ROUNDS = 12;

const signToken = (userId: string, username: string): string =>
  jwt.sign({ userId, username }, env.jwtSecret, { expiresIn: "7d" });

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

// Misafir verisindeki stepId'lerin TAMAMI DB'de mevcut değilse false döner;
// çağıran taraf bu durumda misafir verisinin tamamını yok saymalı (kısmi aktarım yapmamalı).
const areStepIdsValid = async (trx: Knex.Transaction, stepIds: string[]): Promise<boolean> => {
  if (stepIds.length === 0) return true;
  if (!stepIds.every((id) => UUID_RE.test(id))) return false;
  const existing = await trx("steps").whereIn("id", stepIds).select("id");
  return existing.length === new Set(stepIds).size;
};

type GuestQuizResult = { correctCount: number; totalQuestions: number };
type GuestStepResult = GuestQuizResult & { topicId: string; stepId?: string; testId?: string };

const GUEST_START_ACORNS = 500;

// Guest results come from the client, so they are capped to what the content allows before
// they turn into progress, XP or acorns: only results for a step (and a test of that step),
// the best one per test, and no more correct answers than the quiz guestStartSession serves
// for it has questions.
const capGuestResults = async (trx: Knex.Transaction, results: GuestStepResult[]): Promise<GuestStepResult[]> => {
  const stepIds = [...new Set(results.map((r) => r.stepId).filter(Boolean))] as string[];
  if (stepIds.length === 0) return [];

  const tests = await trx("tests").whereIn("step_id", stepIds).orderBy("sort_order").select("id", "step_id");
  const stepOfTest = new Map(tests.map((t) => [t.id as string, t.step_id as string]));
  const firstTestOfStep = new Map<string, string>();
  for (const t of tests) if (!firstTestOfStep.has(t.step_id)) firstTestOfStep.set(t.step_id, t.id);

  const countBy = async (column: "test_id" | "step_id", ids: string[]) => {
    const rows = ids.length
      ? await trx("questions").whereIn(column, ids).where({ status: "approved" }).groupBy(column).select(column).count("* as n")
      : [];
    return new Map(rows.map((r) => [r[column] as string, Number(r.n)]));
  };
  const testQuestions = await countBy("test_id", tests.map((t) => t.id as string));
  const stepQuestions = await countBy("step_id", stepIds.filter((id) => !firstTestOfStep.has(id)));

  const best = new Map<string, GuestStepResult>();
  for (const r of results) {
    if (!r.stepId) continue;
    const testId = r.testId ?? firstTestOfStep.get(r.stepId);
    if (testId && stepOfTest.get(testId) !== r.stepId) continue;
    // A step without tests serves up to 10 random questions of the step.
    const maxCorrect = testId ? (testQuestions.get(testId) ?? 0) : Math.min(10, stepQuestions.get(r.stepId) ?? 0);
    const correctCount = Math.min(r.correctCount, r.totalQuestions, maxCorrect);
    const key = `${r.stepId}:${r.testId ?? ""}`;
    if (correctCount > (best.get(key)?.correctCount ?? -1)) best.set(key, { ...r, correctCount });
  }
  return [...best.values()];
};

// Acorns the given reward steps (chests) give; ids that aren't acorn chests count as 0.
const rewardAcorns = async (trx: Knex.Transaction, stepIds: string[]): Promise<number> => {
  if (stepIds.length === 0) return 0;
  const steps = await trx("steps")
    .whereIn("id", stepIds)
    .where({ step_type: "reward", reward_type: "acorn" })
    .select("reward_amount");
  return steps.reduce((sum, s) => sum + (Number(s.reward_amount) || 0), 0);
};

// Misafirin bir adımdaki en iyi puanı (0-100); üye quiz'iyle aynı formül (quiz.service newScore).
const guestBestScore = (results: GuestQuizResult[]): number =>
  results.reduce(
    (best, r) => Math.max(best, r.totalQuestions > 0 ? Math.round((r.correctCount / r.totalQuestions) * 100) : 0),
    0,
  );

export const register = async (input: RegisterInput) => {
  return db.transaction(async (trx) => {
    const emailExists = await trx("users").where({ email: input.email }).first();
    if (emailExists) throw new AppError(409, "Email already in use");

    const usernameExists = await trx("users").where({ username: input.username }).first();
    if (usernameExists) throw new AppError(409, "Username already taken");

    const passwordHash = await bcrypt.hash(input.password, BCRYPT_ROUNDS);

    const studentRole = await trx("roles").where({ name: "student" }).first();
    if (!studentRole) throw new AppError(500, "Default role not found. Run RBAC seed first.");

    let examTypeId = input.exam_type_id;
    if (!examTypeId) {
      const defaultType = await trx("exam_types").where({ slug: "lisans" }).first();
      examTypeId = defaultType?.id;
    }

    // Misafir verisindeki stepId'lerin (test sonuçları + ödül sandıkları) tamamı DB'de
    // gerçekten var mı diye tek seferde doğrula. Biri bile geçersizse (ör. dev DB sıfırlandıktan
    // sonra tarayıcıda kalan eski stepId'ler), misafir verisinin tamamı yok sayılır — kısmen
    // onarılmaz. Kullanıcı yine de kayıt olur, sadece geçmiş ilerlemesi aktarılmaz.
    const guestStepIds = [
      ...new Set([
        ...(input.guest_data?.quiz_results?.map((r) => r.stepId).filter(Boolean) ?? []),
        ...(input.guest_data?.claimed_reward_step_ids ?? []),
      ]),
    ] as string[];
    const guestData = (await areStepIdsValid(trx, guestStepIds)) ? input.guest_data : undefined;
    const guestResults = await capGuestResults(trx, guestData?.quiz_results ?? []);
    const totalCorrect = guestResults.reduce((sum, r) => sum + r.correctCount, 0);

    // The guest's balance can't be more than the start balance plus what its quizzes
    // (1 per correct answer) and chests could have given.
    const maxAcorns =
      GUEST_START_ACORNS + totalCorrect + (await rewardAcorns(trx, guestData?.claimed_reward_step_ids ?? []));

    const [user] = await trx("users")
      .insert({
        email: input.email,
        username: input.username,
        password_hash: passwordHash,
        role_id: studentRole.id,
        acorn_balance: Math.min(input.acorn_balance ?? GUEST_START_ACORNS, maxAcorns),
        energy: input.energy ?? 25,
        ...(examTypeId && { active_exam_type_id: examTypeId }),
      })
      .returning(["id", "email", "username", "active_exam_type_id", "created_at"]);

    await trx("user_stats").insert({ user_id: user.id });

    if (examTypeId) {
      await trx("user_exam_enrollments").insert({ user_id: user.id, exam_type_id: examTypeId });
    }

    // Apply guest quiz progress if provided
    if (guestResults.length) {
      const stepIds = [...new Set(guestResults.map((r) => r.stepId))] as string[];
      if (stepIds.length > 0) {
        const steps = await trx("steps").whereIn("id", stepIds).select("id", "tests_required");
        const stepMap = new Map(steps.map((s) => [s.id as string, s.tests_required as number]));

        if (totalCorrect > 0) {
          await trx("user_stats").where({ user_id: user.id }).increment({ xp: totalCorrect, total_xp: totalCorrect });
        }

        const stepProgressRows = stepIds.map((stepId) => {
          const results = guestResults.filter((r) => r.stepId === stepId);
          const completedTestIds = new Set(results.filter((r) => r.testId).map((r) => r.testId!));
          const completedTests = completedTestIds.size > 0 ? completedTestIds.size : (results.length > 0 ? 1 : 0);
          const testsRequired = stepMap.get(stepId) ?? 1;
          const isCompleted = completedTests >= testsRequired;
          return {
            user_id: user.id,
            step_id: stepId,
            tests_completed: completedTests,
            is_step_completed: isCompleted,
            step_final_passed: isCompleted,
            best_score: guestBestScore(results),
            stars: 0,
            ...(isCompleted && { completed_at: new Date() }),
          };
        });

        await trx("user_step_progress").insert(stepProgressRows).onConflict(["user_id", "step_id"]).merge();
      }
    }

    // Apply guest claimed rewards if provided
    if (guestData?.claimed_reward_step_ids?.length) {
      const rewardStepIds = guestData.claimed_reward_step_ids;

      const claimInserts = rewardStepIds.map((stepId) => ({
        user_id: user.id,
        step_id: stepId,
      }));
      await trx("user_reward_claims")
        .insert(claimInserts)
        .onConflict(["user_id", "step_id"])
        .ignore();

      const rewardProgressInserts = rewardStepIds.map((stepId) => ({
        user_id: user.id,
        step_id: stepId,
        is_step_completed: true,
        tests_completed: 0,
      }));
      await trx("user_step_progress")
        .insert(rewardProgressInserts)
        .onConflict(["user_id", "step_id"])
        .merge({ is_step_completed: true });
    }

    return { user, token: signToken(user.id as string, user.username as string) };
  });
};

export const login = async (input: LoginInput) => {
  const isEmail = input.identifier.includes("@");
  const user = isEmail
    ? await db("users").where({ email: input.identifier }).first()
    : await db("users").where({ username: input.identifier }).first();
  if (!user) throw new AppError(401, "Invalid credentials");

  const valid = await bcrypt.compare(input.password, user.password_hash as string);
  if (!valid) throw new AppError(401, "Invalid credentials");

  const roleData = await db("roles as r")
    .leftJoin("role_permissions as rp", "r.id", "rp.role_id")
    .leftJoin("permissions as p", "rp.permission_id", "p.id")
    .where("r.id", user.role_id)
    .select(
      "r.name as role",
      db.raw("COALESCE(ARRAY_AGG(p.name) FILTER (WHERE p.name IS NOT NULL), ARRAY[]::text[]) as permissions")
    )
    .groupBy("r.id", "r.name")
    .first();

  return {
    user: {
      id: user.id,
      email: user.email,
      username: user.username,
      role: (roleData?.role as string) ?? null,
      permissions: (roleData?.permissions as string[]) ?? [],
    },
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

    // Misafir verisindeki stepId'lerin tamamı DB'de gerçekten var mı diye tek seferde doğrula.
    // Biri bile geçersizse, adım ilerlemesi/ödül aktarımı tamamen atlanır (kısmen onarılmaz).
    // earnedAcorns adım ID'sine referans vermediği için bu kontrolden etkilenmez.
    const guestStepIds = [...new Set([...quizResults.map((r) => r.stepId).filter(Boolean), ...claimedRewards])] as string[];
    const guestDataValid = await areStepIdsValid(trx, guestStepIds);
    const validQuizResults = guestDataValid ? await capGuestResults(trx, quizResults) : [];
    const validClaimedRewards = guestDataValid ? claimedRewards : [];

    // ==========================================
    // 1. NORMAL TESTLERİN AKTARILMASI (Mevcut mantığın)
    // ==========================================
    const stepIds = [...new Set(validQuizResults.map((r) => r.stepId).filter(Boolean))] as string[];

    if (stepIds.length > 0) {
      const steps = await trx("steps").whereIn("id", stepIds).select("id", "tests_required");
      const stepMap = new Map(steps.map((s) => [s.id as string, s.tests_required as number]));

      const existingProgress = await trx("user_step_progress")
        .where({ user_id: userId })
        .whereIn("step_id", stepIds);
      const existingMap = new Map(existingProgress.map((p) => [p.step_id as string, p]));

      for (const stepId of stepIds) {
        const results = validQuizResults.filter((r) => r.stepId === stepId);
        const completedTestIds = new Set(results.filter((r) => r.testId).map((r) => r.testId!));
        const guestTestsCompleted = completedTestIds.size > 0 ? completedTestIds.size : (results.length > 0 ? 1 : 0);
        const testsRequired = stepMap.get(stepId) ?? 1;
        const guestIsCompleted = guestTestsCompleted >= testsRequired;

        const existing = existingMap.get(stepId);
        const guestScore = guestBestScore(results);

        if (!existing) {
          await trx("user_step_progress").insert({
            user_id: userId,
            step_id: stepId,
            tests_completed: guestTestsCompleted,
            is_step_completed: guestIsCompleted,
            step_final_passed: guestIsCompleted,
            best_score: guestScore,
            stars: 0,
            ...(guestIsCompleted && { completed_at: new Date() }),
          });
          const stepXp = results.reduce((sum, r) => sum + r.correctCount, 0);
          newXp += stepXp;
        } else {
          const testsGained = guestTestsCompleted > (existing.tests_completed as number);
          const scoreImproved = guestScore > ((existing.best_score as number) ?? 0);
          if (testsGained || scoreImproved) {
            await trx("user_step_progress")
              .where({ id: existing.id })
              .update({
                ...(testsGained && {
                  tests_completed: guestTestsCompleted,
                  is_step_completed: guestIsCompleted,
                  ...(guestIsCompleted && { step_final_passed: true }),
                  ...(guestIsCompleted && !existing.is_step_completed && { completed_at: new Date() }),
                }),
                ...(scoreImproved && { best_score: guestScore }),
              });
          }
          // XP yalnızca yeni tamamlanan testler için verilir; daha iyi puan tek başına XP getirmez.
          if (testsGained) {
            const deltaTests = guestTestsCompleted - (existing.tests_completed as number);
            const sortedResults = [...results].sort((a, b) => b.correctCount - a.correctCount);
            const deltaXp = sortedResults.slice(0, deltaTests).reduce((sum, r) => sum + r.correctCount, 0);
            newXp += deltaXp;
          }
        }
      }
    }

    // ==========================================
    // 2. ÖDÜL SANDIKLARININ (REWARDS) AKTARILMASI
    // ==========================================
    let newRewardAcorns = 0;
    if (validClaimedRewards.length > 0) {
      // a. user_reward_claims tablosuna ekle (Aynı sandığı tekrar açmasın diye)
      const claimInserts = validClaimedRewards.map((stepId) => ({
        user_id: userId,
        step_id: stepId,
      }));
      const newClaims = await trx("user_reward_claims")
        .insert(claimInserts)
        .onConflict(["user_id", "step_id"])
        .ignore() // Zaten varsa hata verme, atla
        .returning("step_id");
      newRewardAcorns = await rewardAcorns(trx, newClaims.map((c) => c.step_id as string));

      // b. user_step_progress tablosuna "Tamamlandı" olarak ekle (Frontend mavi tik yapsın diye)
      const rewardProgressInserts = validClaimedRewards.map((stepId) => ({
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

    // Palamut yalnızca bu aktarımda yeni sayılan ilerlemeden gelebilir: XP verilen doğru
    // cevaplar (1 palamut/doğru) ve ilk kez açılan sandıklar. Aynı veriyle tekrar çağrılınca 0 olur.
    const acornsAwarded = Math.min(earnedAcorns, newXp + newRewardAcorns);

    if (acornsAwarded > 0) {
      // Users tablosundaki bakiyeyi artır
      await trx("users")
        .where({ id: userId })
        .increment("acorn_balance", acornsAwarded);

      // İşlemi geçmiş (log) tablosuna kaydet
      await trx("acorn_transactions").insert({
        user_id: userId,
        amount: acornsAwarded,
        type: "guest_sync",
      });
    }

    return { merged: true, xp_awarded: newXp, acorns_awarded: acornsAwarded };
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
