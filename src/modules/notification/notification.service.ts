import db from "../../db/knex";
import { AppError } from "../../middleware/error";

export const createNotification = async (
  userId: string,
  type: string,
  title: string,
  body?: string,
) => {
  const [notification] = await db("notifications")
    .insert({ user_id: userId, type, title, body: body ?? null })
    .returning("*");
  return notification;
};

export const getNotifications = async (
  userId: string,
  page = 1,
  limit = 20,
) => {
  const offset = (page - 1) * limit;

  const notifications = await db("notifications")
    .where({ user_id: userId })
    .orderBy("is_read", "asc")
    .orderBy("created_at", "desc")
    .offset(offset)
    .limit(limit);

  const [countResult] = await db("notifications")
    .where({ user_id: userId })
    .count("id as total");

  return {
    notifications,
    total: Number(countResult?.total ?? 0),
    page,
    limit,
  };
};

export const markAsRead = async (userId: string, notificationId: string) => {
  const notification = await db("notifications")
    .where({ id: notificationId, user_id: userId })
    .first();
  if (!notification) throw new AppError(404, "Notification not found");

  await db("notifications").where({ id: notificationId }).update({ is_read: true });
  return { message: "Marked as read" };
};

export const markAllAsRead = async (userId: string) => {
  const count = await db("notifications")
    .where({ user_id: userId, is_read: false })
    .update({ is_read: true });
  return { marked: count };
};

export const getUnreadCount = async (userId: string) => {
  const [result] = await db("notifications")
    .where({ user_id: userId, is_read: false })
    .count("id as count");
  return { count: Number(result?.count ?? 0) };
};
