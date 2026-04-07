import db from "../../db/knex";
import { AppError } from "../../middleware/error";
import type { UpdateProfileInput } from "./user.schema";

export const getProfile = async (userId: string) => {
  const user = await db("users")
    .where({ id: userId })
    .select("id", "email", "username", "avatar_url", "daily_goal_xp", "hearts", "created_at")
    .first();
  if (!user) throw new AppError(404, "User not found");
  return user;
};

export const getStats = async (userId: string) => {
  const stats = await db("user_stats").where({ user_id: userId }).first();
  if (!stats) throw new AppError(404, "Stats not found");
  return stats;
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
