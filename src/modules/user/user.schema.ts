import { z } from "zod/v4";

export const UpdateProfileSchema = z.object({
  username: z.string().min(3).max(30).optional(),
  avatarUrl: z.url().optional(),
  dailyGoalXp: z.enum(["10", "20", "50", "100"]).optional(),
});

export type UpdateProfileInput = z.infer<typeof UpdateProfileSchema>;
