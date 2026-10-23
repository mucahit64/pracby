import { z } from "zod";

export const RegisterSchema = z.object({
  email: z.string().email("Geçerli bir e-posta adresi gir"),
  username: z
    .string()
    .min(3, "Kullanıcı adı en az 3 karakter olmalı")
    .max(20, "Kullanıcı adı en fazla 20 karakter olabilir")
    .regex(
      /^[a-z0-9](?!.*[._]{2})[a-z0-9._]{1,18}[a-z0-9]$/,
      "Kullanıcı adı küçük harf veya rakamla başlayıp bitmeli; nokta ve alt çizgi yan yana gelemez",
    ),
  password: z.string().min(6, "Şifre en az 6 karakter olmalı"),
  exam_type_id: z.string().uuid().optional(),
  acorn_balance: z.number().int().min(0).optional(),
  energy: z.number().int().min(0).max(25).optional(),
  guest_data: z
    .object({
      quiz_results: z
        .array(
          z.object({
            topicId: z.string(),
            stepId: z.string().optional(),
            testId: z.string().optional(),
            sessionType: z.string().optional(),
            correctCount: z.number().int().min(0),
            totalQuestions: z.number().int().min(0),
          }),
        )
        .max(500)
        .optional(),
      claimed_reward_step_ids: z.array(z.string()).max(500).optional(),
    })
    .optional(),
});

export const LoginSchema = z.object({
  identifier: z.string().min(1, "E-posta veya kullanıcı adı gir"),
  password: z.string().min(1, "Şifreni gir"),
});

export const MergeGuestProgressSchema = z.object({
  quiz_results: z.array(
    z.object({
      topicId: z.string(),
      stepId: z.string().optional(),
      testId: z.string().optional(),
      sessionType: z.string().optional(),
      correctCount: z.number().int().min(0),
      totalQuestions: z.number().int().min(0),
    }),
  ).max(500).default([]),
  claimed_rewards: z.array(z.string()).max(500).default([]),
  earned_acorns: z.number().int().min(0).default(0),
});

export const ForgotPasswordSchema = z.object({
  email: z.string().email("Geçerli bir e-posta adresi gir"),
});

export const ResetPasswordSchema = z.object({
  token: z.string().length(64, "Geçersiz token"),
  password: z.string().min(6, "Şifre en az 6 karakter olmalıdır"),
});

export type RegisterInput = z.infer<typeof RegisterSchema>;
export type LoginInput = z.infer<typeof LoginSchema>;
export type MergeGuestProgressInput = z.infer<typeof MergeGuestProgressSchema>;
export type ForgotPasswordInput = z.infer<typeof ForgotPasswordSchema>;
export type ResetPasswordInput = z.infer<typeof ResetPasswordSchema>;
