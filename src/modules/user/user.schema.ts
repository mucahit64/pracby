import { z } from "zod";

export const UpdateProfileSchema = z.object({
  username: z
    .string()
    .min(3, "Kullanıcı adı en az 3 karakter olmalı")
    .max(30, "Kullanıcı adı en fazla 30 karakter olabilir")
    .regex(
      /^[a-z0-9._]+$/,
      "Kullanıcı adında sadece küçük harf, rakam, nokta ve alt çizgi olabilir",
    )
    .optional(),
  email: z.string().email("Geçerli bir e-posta adresi gir").optional(),
  currentPassword: z.string().min(1).optional(),
  newPassword: z.string().min(6, "Yeni şifre en az 6 karakter olmalı").optional(),
  avatarUrl: z.url().optional(),
  dailyGoalXp: z.enum(["10", "20", "50", "100"]).optional(),
}).refine(
  (data) => !data.newPassword || data.currentPassword,
  { message: "Yeni şifre için mevcut şifreni gir", path: ["currentPassword"] },
).refine(
  (data) => !data.email || data.currentPassword,
  { message: "E-postayı değiştirmek için mevcut şifreni gir", path: ["currentPassword"] },
);

export type UpdateProfileInput = z.infer<typeof UpdateProfileSchema>;

export const DeleteAccountSchema = z.object({
  password: z.string().min(1, "Şifre gerekli"),
});

export type DeleteAccountInput = z.infer<typeof DeleteAccountSchema>;
