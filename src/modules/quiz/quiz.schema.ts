import { z } from "zod/v4";

export const StartQuizSchema = z.object({
  topicId: z.uuid(),
  sessionType: z.enum(["lesson", "review", "practice"]).default("lesson"),
});

export const AnswerSchema = z.object({
  questionId: z.uuid(),
  answerId: z.uuid().optional(),
  isSkipped: z.boolean().default(false),
  timeSpent: z.number().int().min(0).optional(),
});

export type StartQuizInput = z.infer<typeof StartQuizSchema>;
export type AnswerInput = z.infer<typeof AnswerSchema>;
