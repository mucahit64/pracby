import { z } from "zod";

export const RegisterSchema = z.object({
  email: z.string().email(),
  username: z
    .string()
    .min(3)
    .max(30)
    .regex(
      /^[a-z0-9._]+$/,
      "Username can only contain lowercase letters, numbers, dots and underscores",
    ),
  password: z.string().min(6, "Password must be at least 6 characters"),
  exam_type_id: z.string().uuid().optional(),
});

export const LoginSchema = z.object({
  identifier: z.string().min(1, "Email or username is required"),
  password: z.string().min(1),
});

export type RegisterInput = z.infer<typeof RegisterSchema>;
export type LoginInput = z.infer<typeof LoginSchema>;
