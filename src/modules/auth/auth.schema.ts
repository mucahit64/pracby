import { z } from "zod";

export const RegisterSchema = z.object({
  email: z.string().email(),
  username: z
    .string()
    .min(3)
    .max(20)
    .regex(
      /^[a-z0-9](?!.*[._]{2})[a-z0-9._]{1,18}[a-z0-9]$/,
      "Username must be 3-20 chars, start/end with alphanumeric, no consecutive dots/underscores",
    ),
  password: z.string().min(6, "Password must be at least 6 characters"),
  exam_type_id: z.string().uuid().optional(),
  acorn_balance: z.number().int().min(0).optional(),
  hearts: z.number().int().min(0).max(5).optional(),
  guest_data: z
    .object({
      quiz_results: z
        .array(
          z.object({
            topicId: z.string(),
            stepId: z.string().optional(),
            testId: z.string().optional(),
            correctCount: z.number().int().min(0),
            totalQuestions: z.number().int().min(0),
          }),
        )
        .optional(),
    })
    .optional(),
});

export const LoginSchema = z.object({
  identifier: z.string().min(1, "Email or username is required"),
  password: z.string().min(1),
});

export type RegisterInput = z.infer<typeof RegisterSchema>;
export type LoginInput = z.infer<typeof LoginSchema>;
