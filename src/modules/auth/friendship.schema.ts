import { z } from "zod/v4";

export const FriendRequestSchema = z.object({
  friendId: z.uuid(),
});

export const FriendActionSchema = z.object({
  action: z.enum(["accept", "reject"]),
});

export type FriendRequestInput = z.infer<typeof FriendRequestSchema>;
export type FriendActionInput = z.infer<typeof FriendActionSchema>;
