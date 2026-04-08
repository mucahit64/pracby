import { z } from "zod/v4";

export const StartQuizSchema = z.object({
  topicId: z.uuid(),
  stepId: z.uuid().optional(),
  testId: z.uuid().optional(),
  sessionType: z.enum(["lesson", "review", "practice", "step_final", "topic_final"]).default("lesson"),
});

export const AnswerSchema = z.object({
  questionId: z.uuid(),
  answerId: z.uuid().optional(),
  isSkipped: z.boolean().default(false),
  timeSpent: z.number().int().min(0).optional(),
  // fill_blank
  textAnswer: z.string().max(500).optional(),
  // matching: array of {leftIndex, rightIndex}
  matchingAnswer: z.array(z.object({ leftIndex: z.number().int(), rightIndex: z.number().int() })).optional(),
  // ordering: array of indices in user's order
  orderedIndices: z.array(z.number().int()).optional(),
  // flashcard: client decides correctness
  isCorrect: z.boolean().optional(),
});

export type StartQuizInput = z.infer<typeof StartQuizSchema>;
export type AnswerInput = z.infer<typeof AnswerSchema>;
