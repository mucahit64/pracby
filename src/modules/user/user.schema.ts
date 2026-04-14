import { z } from "zod";

export const UpdateProfileSchema = z.object({
  username: z
    .string()
    .min(3)
    .max(30)
    .regex(
      /^[a-z0-9._]+$/,
      "Username can only contain lowercase letters, numbers, dots and underscores",
    )
    .optional(),
  avatarUrl: z.url().optional(),
  dailyGoalXp: z.enum(["10", "20", "50", "100"]).optional(),
});

export type UpdateProfileInput = z.infer<typeof UpdateProfileSchema>;
