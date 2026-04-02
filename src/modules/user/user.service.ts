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
