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
  email: z.string().email().optional(),
  currentPassword: z.string().min(1).optional(),
  newPassword: z.string().min(6, "New password must be at least 6 characters").optional(),
  avatarUrl: z.url().optional(),
  dailyGoalXp: z.enum(["10", "20", "50", "100"]).optional(),
}).refine(
  (data) => !data.newPassword || data.currentPassword,
  { message: "Current password is required to set a new password", path: ["currentPassword"] },
).refine(
  (data) => !data.email || data.currentPassword,
  { message: "Current password is required to change email", path: ["currentPassword"] },
);

export type UpdateProfileInput = z.infer<typeof UpdateProfileSchema>;
