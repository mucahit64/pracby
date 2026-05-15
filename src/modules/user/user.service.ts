import db from "../../db/knex";
import bcrypt from "bcrypt";
import { AppError } from "../../middleware/error";
import type { UpdateProfileInput } from "./user.schema";

const MAX_ENERGY = 25;
const REGEN_INTERVAL_MS = 10 * 60 * 1000; // 10 minutes

export const regenerateEnergy = async (userId: string) => {
  const user = await db("users")
    .where({ id: userId })
    .select("energy", "energy_refreshed_at")
    .first();
  if (!user) return;

  if (user.energy >= MAX_ENERGY) {
    return;
  }

  const refreshedAt = new Date(user.energy_refreshed_at).getTime();
  const now = Date.now();
  const elapsed = now - refreshedAt;
  const energyToAdd = Math.floor(elapsed / REGEN_INTERVAL_MS);

  if (energyToAdd <= 0) return;

  const newEnergy = Math.min(MAX_ENERGY, user.energy + energyToAdd);
  const advanceMs = energyToAdd * REGEN_INTERVAL_MS;

  await db("users").where({ id: userId }).update({
    energy: newEnergy,
    energy_refreshed_at: newEnergy >= MAX_ENERGY
      ? new Date(now)
      : new Date(refreshedAt + advanceMs),
  });
};

export const getProfile = async (userId: string) => {
  await regenerateEnergy(userId);

  const user = await db("users as u")
    .join("roles as r", "u.role_id", "r.id")
    .leftJoin("role_permissions as rp", "r.id", "rp.role_id")
    .leftJoin("permissions as p", "rp.permission_id", "p.id")
    .where("u.id", userId)
    .select(
      "u.id",
      "u.email",
      "u.username",
      "u.avatar_url",
      "u.daily_goal_xp",
      "u.energy",
      "u.energy_refreshed_at",
      "u.acorn_balance",
      "u.active_exam_type_id",
      "u.created_at",
      "r.name as role",
      db.raw("COALESCE(ARRAY_AGG(p.name) FILTER (WHERE p.name IS NOT NULL), ARRAY[]::text[]) as permissions")
    )
    .groupBy(
      "u.id",
      "u.email",
      "u.username",
      "u.avatar_url",
      "u.daily_goal_xp",
      "u.energy",
      "u.energy_refreshed_at",
      "u.acorn_balance",
      "u.active_exam_type_id",
      "u.created_at",
      "r.name"
    )
    .first();
  if (!user) throw new AppError(404, "User not found");

  const nextEnergyAt = user.energy < MAX_ENERGY
    ? new Date(new Date(user.energy_refreshed_at).getTime() + REGEN_INTERVAL_MS).toISOString()
    : null;

  return { ...user, next_energy_at: nextEnergyAt };
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

export const deleteEnrollment = async (userId: string, examTypeId: string): Promise<{ newActiveExamTypeId: string | null }> => {
  // Guard: must have at least 2 active enrollments before deleting
  const [{ count }] = await db("user_exam_enrollments")
    .where({ user_id: userId, is_active: true })
    .count<{ count: string }[]>("id as count");

  if (Number(count) <= 1) {
    throw new AppError(400, "Son kayıtlı sınavınızı silemezsiniz");
  }

  // Read current active exam to determine if a switch is needed
  const user = await db("users").where({ id: userId }).select("active_exam_type_id").first();
  if (!user) throw new AppError(404, "User not found");

  const needsSwitch = user.active_exam_type_id === examTypeId;
  let newActiveExamTypeId: string | null = null;

  await db.transaction(async (trx) => {
    // 1. Soft-delete the enrollment
    const affected = await trx("user_exam_enrollments")
      .where({ user_id: userId, exam_type_id: examTypeId, is_active: true })
      .update({ is_active: false, deleted_at: trx.fn.now() });

    if (affected === 0) {
      throw new AppError(404, "Enrollment not found");
    }

    // 2. If the deleted exam was the active one, switch to the oldest remaining enrollment
    if (needsSwitch) {
      const next = await trx("user_exam_enrollments")
        .where({ user_id: userId, is_active: true })
        .whereNot({ exam_type_id: examTypeId })
        .orderBy("enrolled_at", "asc")
        .select("exam_type_id")
        .first();

      if (next) {
        await trx("users")
          .where({ id: userId })
          .update({ active_exam_type_id: next.exam_type_id });
        newActiveExamTypeId = next.exam_type_id;
      }
    }
  });

  return { newActiveExamTypeId };
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
  const user = await db("users").where({ id: userId }).first();
  if (!user) throw new AppError(404, "User not found");

  // Verify current password if changing email or password
  if (input.currentPassword) {
    const valid = await bcrypt.compare(input.currentPassword, user.password_hash as string);
    if (!valid) throw new AppError(401, "Mevcut şifre hatalı");
  }

  if (input.username) {
    const exists = await db("users")
      .where({ username: input.username })
      .whereNot({ id: userId })
      .first();
    if (exists) throw new AppError(409, "Bu kullanıcı adı zaten kullanılıyor");
  }

  if (input.email) {
    const exists = await db("users")
      .where({ email: input.email })
      .whereNot({ id: userId })
      .first();
    if (exists) throw new AppError(409, "Bu e-posta zaten kullanılıyor");
  }

  const updateData: Record<string, unknown> = {};
  if (input.username) updateData.username = input.username;
  if (input.email) updateData.email = input.email;
  if (input.avatarUrl) updateData.avatar_url = input.avatarUrl;
  if (input.dailyGoalXp) updateData.daily_goal_xp = Number(input.dailyGoalXp);
  if (input.newPassword) {
    updateData.password_hash = await bcrypt.hash(input.newPassword, 12);
  }

  if (Object.keys(updateData).length === 0) {
    return { id: user.id, email: user.email, username: user.username, avatar_url: user.avatar_url, daily_goal_xp: user.daily_goal_xp };
  }

  const [updated] = await db("users")
    .where({ id: userId })
    .update(updateData)
    .returning(["id", "email", "username", "avatar_url", "daily_goal_xp"]);

  return updated;
};
