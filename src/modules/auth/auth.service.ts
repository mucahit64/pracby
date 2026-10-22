import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { Resend } from "resend";
import type { Knex } from "knex";
import db from "../../db/knex";
import { env } from "../../config/env";
import { AppError } from "../../middleware/error";
import { TOPIC_FINAL_QUESTION_COUNT } from "../quiz/quiz.service";
import type { RegisterInput, LoginInput, ForgotPasswordInput, ResetPasswordInput } from "./auth.schema";

const resend = new Resend(env.resendApiKey);

const BCRYPT_ROUNDS = 12;

const signToken = (userId: string, username: string): string =>
  jwt.sign({ userId, username }, env.jwtSecret, { expiresIn: "7d" });

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

// Misafir verisindeki adım ID'lerinden DB'de hâlâ var olanlar. Silinmiş bir adımın (ya da
// sıfırlanmış bir dev DB'den kalan ID'nin) sonucu tek başına atılır; geri kalan ilerleme aktarılır.
const existingStepIds = async (trx: Knex.Transaction, stepIds: (string | undefined)[]): Promise<Set<string>> => {
  const ids = [...new Set(stepIds.filter((id): id is string => !!id && UUID_RE.test(id)))];
  if (ids.length === 0) return new Set();
  const rows = await trx("steps").whereIn("id", ids).select("id");
  return new Set(rows.map((r) => r.id as string));
};

// Sandıklar üyelerdeki claimReward kuralıyla aktarılır: sandıktan hemen önceki adım bir dersse
// o ders tamamlanmış olmalı. [completedStepIds]: hesapta ya da bu aktarımda tamamlanan adımlar.
const openableChests = async (
  trx: Knex.Transaction,
  rewardStepIds: string[],
  completedStepIds: Set<string>,
): Promise<string[]> => {
  if (rewardStepIds.length === 0) return [];
  const chests = await trx("steps")
    .whereIn("id", [...new Set(rewardStepIds)])
    .where({ step_type: "reward" })
    .select("id", "topic_id");
  if (chests.length === 0) return [];
  const topicSteps = await trx("steps")
    .whereIn("topic_id", [...new Set(chests.map((c) => c.topic_id as string))])
    .orderBy("sort_order", "asc")
    .select("id", "topic_id", "step_type");
  return chests
    .filter((chest) => {
      const steps = topicSteps.filter((s) => s.topic_id === chest.topic_id);
      const previous = steps[steps.findIndex((s) => s.id === chest.id) - 1];
      return !previous || previous.step_type !== "lesson" || completedStepIds.has(previous.id as string);
    })
    .map((c) => c.id as string);
};

type GuestQuizResult = { correctCount: number; totalQuestions: number };
type GuestStepResult = GuestQuizResult & { topicId: string; stepId?: string; testId?: string; sessionType?: string };

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


// Results without a step are topic finals: the map starts every lesson with its step.
const isTopicFinal = (r: GuestStepResult) => r.sessionType === "topic_final" || !r.stepId;

type GuestFinal = { topicId: string; correctCount: number; score: number };

// The guest's best topic final per topic that still exists, capped like the lessons.
const capGuestFinals = async (trx: Knex.Transaction, results: GuestStepResult[]): Promise<GuestFinal[]> => {
  const finals = results.filter((r) => isTopicFinal(r) && UUID_RE.test(r.topicId));
  if (finals.length === 0) return [];
  const rows = await trx("questions")
    .whereIn("topic_id", [...new Set(finals.map((r) => r.topicId))])
    .where({ status: "approved" })
    .groupBy("topic_id")
    .select("topic_id")
    .count("* as n");
  const questionsOf = new Map(rows.map((r) => [r.topic_id as string, Number(r.n)]));

  const best = new Map<string, GuestFinal>();
  for (const r of finals) {
    // The guest's final asks the member's questions: at most TOPIC_FINAL_QUESTION_COUNT.
    const available = Math.min(TOPIC_FINAL_QUESTION_COUNT, questionsOf.get(r.topicId) ?? 0);
    if (available === 0) continue;
    const correctCount = Math.min(r.correctCount, r.totalQuestions, available);
    const score = guestBestScore([{ correctCount, totalQuestions: r.totalQuestions }]);
    if (score > (best.get(r.topicId)?.score ?? -1)) best.set(r.topicId, { topicId: r.topicId, correctCount, score });
  }
  return [...best.values()];
};

// Saves topic finals like a member's (quiz.service recordTopicFinal): the best score and
// the first finish.
const saveGuestFinals = async (trx: Knex.Transaction, userId: string, finals: GuestFinal[]) => {
  if (finals.length === 0) return;
  await trx("user_topic_progress")
    .insert(finals.map((f) => ({ user_id: userId, topic_id: f.topicId, final_best_score: f.score, final_completed_at: trx.fn.now() })))
    .onConflict(["user_id", "topic_id"])
    .merge({
      final_best_score: trx.raw("GREATEST(user_topic_progress.final_best_score, EXCLUDED.final_best_score)"),
      final_completed_at: trx.raw("COALESCE(user_topic_progress.final_completed_at, EXCLUDED.final_completed_at)"),
    });
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

    const guestQuizResults = input.guest_data?.quiz_results ?? [];
    const knownSteps = await existingStepIds(trx, guestQuizResults.map((r) => r.stepId));
    const guestResults = await capGuestResults(
      trx,
      guestQuizResults.filter((r) => r.stepId && knownSteps.has(r.stepId)),
    );
    const guestFinals = await capGuestFinals(trx, guestQuizResults);
    const totalCorrect =
      guestResults.reduce((sum, r) => sum + r.correctCount, 0) +
      guestFinals.reduce((sum, f) => sum + f.correctCount, 0);

    const stepIds = [...new Set(guestResults.map((r) => r.stepId))] as string[];
    const steps = stepIds.length ? await trx("steps").whereIn("id", stepIds).select("id", "tests_required") : [];
    const stepMap = new Map(steps.map((s) => [s.id as string, s.tests_required as number]));
    const guestProgress = stepIds.map((stepId) => {
      const results = guestResults.filter((r) => r.stepId === stepId);
      const completedTestIds = new Set(results.filter((r) => r.testId).map((r) => r.testId!));
      const completedTests = completedTestIds.size > 0 ? completedTestIds.size : (results.length > 0 ? 1 : 0);
      return {
        stepId,
        completedTests,
        isCompleted: completedTests >= (stepMap.get(stepId) ?? 1),
        bestScore: guestBestScore(results),
      };
    });
    const chests = await openableChests(
      trx,
      input.guest_data?.claimed_reward_step_ids ?? [],
      new Set(guestProgress.filter((p) => p.isCompleted).map((p) => p.stepId)),
    );

    // The guest's balance can't be more than the start balance plus what its quizzes
    // (1 per correct answer) and chests could have given.
    const maxAcorns = GUEST_START_ACORNS + totalCorrect + (await rewardAcorns(trx, chests));

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

    if (totalCorrect > 0) {
      await trx("user_stats").where({ user_id: user.id }).increment({ xp: totalCorrect, total_xp: totalCorrect });
    }
    await saveGuestFinals(trx, user.id as string, guestFinals);

    // Apply guest quiz progress if provided
    if (guestProgress.length) {
      const stepProgressRows = guestProgress.map((p) => ({
        user_id: user.id,
        step_id: p.stepId,
        tests_completed: p.completedTests,
        is_step_completed: p.isCompleted,
        step_final_passed: p.isCompleted,
        best_score: p.bestScore,
        stars: 0,
        ...(p.isCompleted && { completed_at: new Date() }),
      }));

      await trx("user_step_progress").insert(stepProgressRows).onConflict(["user_id", "step_id"]).merge();
    }

    // Apply guest claimed rewards if provided
    if (chests.length) {
      const rewardStepIds = chests;

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
  quizResults: GuestStepResult[],
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

    const knownSteps = await existingStepIds(trx, quizResults.map((r) => r.stepId));
    const validQuizResults = await capGuestResults(
      trx,
      quizResults.filter((r) => r.stepId && knownSteps.has(r.stepId)),
    );

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
    // Konu sonu testleri (boss): XP yalnızca ilk bitirişte, dersler gibi.
    const guestFinals = await capGuestFinals(trx, quizResults);
    if (guestFinals.length > 0) {
      const finishedBefore = new Set(
        (await trx("user_topic_progress")
          .where({ user_id: userId })
          .whereIn("topic_id", guestFinals.map((f) => f.topicId))
          .whereNotNull("final_completed_at")
          .pluck("topic_id")) as string[],
      );
      newXp += guestFinals.filter((f) => !finishedBefore.has(f.topicId)).reduce((sum, f) => sum + f.correctCount, 0);
      await saveGuestFinals(trx, userId, guestFinals);
    }

    // Ders ilerlemesi yukarıda yazıldı; sandık kuralı hesabın güncel hâline bakar.
    const completedSteps = await trx("user_step_progress")
      .where({ user_id: userId, is_step_completed: true })
      .pluck("step_id");
    const validClaimedRewards = await openableChests(trx, claimedRewards, new Set(completedSteps as string[]));

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
