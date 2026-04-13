import db from "../../db/knex";
import { AppError } from "../../middleware/error";
import { createNotification } from "../notification/notification.service";

// Status: 0 = pending, 1 = accepted

export const listFriends = async (userId: string) => {
  const friends = await db("friendships as f")
    .where(function () {
      this.where("f.user_id", userId).orWhere("f.friend_id", userId);
    })
    .where("f.status", 1)
    .join("users as u", function () {
      this.on(db.raw("CASE WHEN f.user_id = ? THEN f.friend_id ELSE f.user_id END", [userId]))
        .onVal("=", db.raw("u.id"));
    })
    .leftJoin("user_stats as us", "u.id", "us.user_id")
    .select(
      "f.id as friendship_id",
      "u.id as user_id",
      "u.username",
      "u.avatar_url",
      "us.xp",
      "us.level",
      "us.current_streak",
      "f.created_at as friends_since",
    );

  return friends;
};

export const listPendingRequests = async (userId: string) => {
  return db("friendships as f")
    .where("f.friend_id", userId)
    .where("f.status", 0)
    .join("users as u", "f.user_id", "u.id")
    .select(
      "f.id as friendship_id",
      "u.id as user_id",
      "u.username",
      "u.avatar_url",
      "f.created_at as requested_at",
    )
    .orderBy("f.created_at", "desc");
};

export const sendRequest = async (userId: string, friendUsername: string) => {
  const friend = await db("users").where({ username: friendUsername }).first();
  if (!friend) throw new AppError(404, "User not found");
  if (friend.id === userId) throw new AppError(400, "Cannot send friend request to yourself");

  // Check existing friendship in either direction
  const existing = await db("friendships")
    .where(function () {
      this.where({ user_id: userId, friend_id: friend.id })
        .orWhere({ user_id: friend.id, friend_id: userId });
    })
    .first();

  if (existing) {
    if (existing.status === 1) throw new AppError(400, "Already friends");
    throw new AppError(400, "Friend request already exists");
  }

  const [friendship] = await db("friendships")
    .insert({ user_id: userId, friend_id: friend.id, status: 0 })
    .returning("*");

  // Notify the recipient
  const sender = await db("users").where({ id: userId }).select("username").first();
  await createNotification(
    friend.id as string,
    "friend_request",
    "Arkadaşlık İsteği",
    `${sender?.username} sana arkadaşlık isteği gönderdi.`,
  );

  return friendship;
};

export const respondToRequest = async (
  userId: string,
  friendshipId: string,
  action: "accept" | "reject",
) => {
  const friendship = await db("friendships")
    .where({ id: friendshipId, friend_id: userId, status: 0 })
    .first();
  if (!friendship) throw new AppError(404, "Pending request not found");

  if (action === "accept") {
    await db("friendships").where({ id: friendshipId }).update({ status: 1 });

    // Notify the sender
    const acceptor = await db("users").where({ id: userId }).select("username").first();
    await createNotification(
      friendship.user_id as string,
      "friend_accepted",
      "Arkadaşlık Kabul Edildi",
      `${acceptor?.username} arkadaşlık isteğini kabul etti.`,
    );

    return { message: "Friend request accepted" };
  }

  await db("friendships").where({ id: friendshipId }).delete();
  return { message: "Friend request rejected" };
};

export const removeFriend = async (userId: string, friendshipId: string) => {
  const friendship = await db("friendships")
    .where({ id: friendshipId })
    .where(function () {
      this.where("user_id", userId).orWhere("friend_id", userId);
    })
    .first();
  if (!friendship) throw new AppError(404, "Friendship not found");

  await db("friendships").where({ id: friendshipId }).delete();
  return { message: "Friend removed" };
};
