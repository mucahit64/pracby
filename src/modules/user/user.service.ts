import db from "../../db/knex";
import { AppError } from "../../middleware/error";
import type { UpdateProfileInput } from "./user.schema";

const MAX_HEARTS = 5;
const REGEN_INTERVAL_MS = 10 * 60 * 1000; // 10 minutes

export const regenerateHearts = async (userId: string) => {
  const user = await db("users")
    .where({ id: userId })
    .select("hearts", "hearts_refreshed_at")
    .first();
  if (!user) return;

  if (user.hearts >= MAX_HEARTS) {
    return;
  }

  const refreshedAt = new Date(user.hearts_refreshed_at).getTime();
  const now = Date.now();
  const elapsed = now - refreshedAt;
  const heartsToAdd = Math.floor(elapsed / REGEN_INTERVAL_MS);

  if (heartsToAdd <= 0) return;

  const newHearts = Math.min(MAX_HEARTS, user.hearts + heartsToAdd);
  const advanceMs = heartsToAdd * REGEN_INTERVAL_MS;

  await db("users").where({ id: userId }).update({
    hearts: newHearts,
    hearts_refreshed_at: newHearts >= MAX_HEARTS
      ? new Date(now)
      : new Date(refreshedAt + advanceMs),
  });
};

export const getProfile = async (userId: string) => {
  await regenerateHearts(userId);

  const user = await db("users")
    .where({ id: userId })
    .select("id", "email", "username", "avatar_url", "daily_goal_xp", "hearts", "hearts_refreshed_at", "acorn_balance", "active_exam_type_id", "created_at")
    .first();
  if (!user) throw new AppError(404, "User not found");

  const nextHeartAt = user.hearts < MAX_HEARTS
    ? new Date(new Date(user.hearts_refreshed_at).getTime() + REGEN_INTERVAL_MS).toISOString()
    : null;

  return { ...user, next_heart_at: nextHeartAt };
};

export const getStats = async (userId: string) => {
  const stats = await db("user_stats").where({ user_id: userId }).first();
  if (!stats) throw new AppError(404, "Stats not found");
  return stats;
};

export const getStreakHistory = async (userId: string) => {
  // Return last 7 days (Mon to Sun of current week)
  const days: string[] = [];
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 = Sunday
  const monday = new Date(today);
  monday.setDate(today.getDate() - ((dayOfWeek + 6) % 7));
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    days.push(d.toISOString().split("T")[0]);
  }

  const rows = await db("streak_history")
    .where("user_id", userId)
    .whereIn("date", days)
    .select("date", "quizzes_completed");

  const rowMap = new Map(rows.map((r) => [r.date instanceof Date ? r.date.toISOString().split("T")[0] : String(r.date).split("T")[0], r]));
  const todayStr = today.toISOString().split("T")[0];
  const labels = ["Pzt", "Sal", "Çrş", "Per", "Cum", "Cts", "Paz"];

  return days.map((date, i) => ({
    label: labels[i],
    date,
    done: (rowMap.get(date)?.quizzes_completed ?? 0) > 0,
    isToday: date === todayStr,
  }));
};

export const getAchievements = async (userId: string) => {
  return db("user_achievements as ua")
    .join("achievements as a", "ua.achievement_id", "a.id")
    .where("ua.user_id", userId)
    .select("a.*", "ua.earned_at")
    .orderBy("ua.earned_at", "desc");
};

export const getEnrollments = async (userId: string) => {
  return db("user_exam_enrollments as ue")
    .join("exam_types as et", "ue.exam_type_id", "et.id")
    .join("exam_groups as eg", "et.exam_group_id", "eg.id")
    .where("ue.user_id", userId)
    .where("ue.is_active", true)
    .select(
      "ue.id",
      "ue.exam_type_id",
      "ue.enrolled_at",
      "et.name as exam_type_name",
      "et.slug as exam_type_slug",
      "eg.name as exam_group_name",
      "eg.slug as exam_group_slug",
    )
    .orderBy("ue.enrolled_at");
};

export const addEnrollment = async (userId: string, examTypeId: string) => {
  const examType = await db("exam_types").where({ id: examTypeId, is_active: true }).first();
  if (!examType) throw new AppError(404, "Exam type not found");

  const existing = await db("user_exam_enrollments")
    .where({ user_id: userId, exam_type_id: examTypeId })
    .first();

  if (existing) {
    if (existing.is_active) throw new AppError(409, "Already enrolled");
    const [updated] = await db("user_exam_enrollments")
      .where({ id: existing.id })
      .update({ is_active: true })
      .returning("*");
    return updated;
  }

  const [enrollment] = await db("user_exam_enrollments")
    .insert({ user_id: userId, exam_type_id: examTypeId })
    .returning("*");
  return enrollment;
};

export const switchActiveExam = async (userId: string, examTypeId: string) => {
  const enrollment = await db("user_exam_enrollments")
    .where({ user_id: userId, exam_type_id: examTypeId, is_active: true })
    .first();
  if (!enrollment) throw new AppError(404, "Not enrolled in this exam type");

  const [updated] = await db("users")
    .where({ id: userId })
    .update({ active_exam_type_id: examTypeId })
    .returning(["id", "username", "email", "active_exam_type_id"]);
  return updated;
};

export const updateProfile = async (userId: string, input: UpdateProfileInput) => {
  if (input.username) {
    const exists = await db("users")
      .where({ username: input.username })
      .whereNot({ id: userId })
      .first();
    if (exists) throw new AppError(409, "Username already taken");
  }

  const [updated] = await db("users")
    .where({ id: userId })
    .update({
      ...(input.username && { username: input.username }),
      ...(input.avatarUrl && { avatar_url: input.avatarUrl }),
      ...(input.dailyGoalXp && { daily_goal_xp: Number(input.dailyGoalXp) }),
    })
    .returning(["id", "email", "username", "avatar_url", "daily_goal_xp"]);

  return updated;
};
