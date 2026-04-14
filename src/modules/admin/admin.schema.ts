import { z } from "zod";

// ── Questions ──────────────────────────────────────────

const AnswerItemSchema = z.object({
  answer_text: z.string().min(1),
  is_correct: z.boolean(),
});

export const CreateQuestionSchema = z.object({
  topic_id: z.string().uuid(),
  step_id: z.string().uuid().optional(),
  test_id: z.string().uuid().optional(),
  question_text: z.string().min(1),
  question_type: z.enum(["multiple_choice", "true_false", "fill_blank", "matching", "ordering", "flashcard", "swipe"]),
  difficulty: z.number().int().min(1).max(3).default(1),
  point_value: z.number().int().min(1).default(1),
  explanation: z.string().optional(),
  hint: z.string().optional(),
  type_data: z.record(z.string(), z.unknown()).optional(),
  answers: z.array(AnswerItemSchema).optional(),
});

export const UpdateQuestionSchema = z.object({
  question_text: z.string().min(1).optional(),
  question_type: z.enum(["multiple_choice", "true_false", "fill_blank", "matching", "ordering", "flashcard", "swipe"]).optional(),
  difficulty: z.number().int().min(1).max(3).optional(),
  point_value: z.number().int().min(1).optional(),
  explanation: z.string().optional(),
  hint: z.string().optional(),
  type_data: z.record(z.string(), z.unknown()).optional(),
  status: z.enum(["draft", "approved", "archived"]).optional(),
});

export const BulkCreateQuestionsSchema = z.object({
  questions: z.array(CreateQuestionSchema).min(1).max(100),
});

// ── Topics ─────────────────────────────────────────────

export const CreateTopicSchema = z.object({
  course_id: z.string().uuid(),
  name: z.string().min(1),
  description: z.string().optional(),
  icon_url: z.string().optional(),
  sort_order: z.number().int().default(0),
  total_lessons: z.number().int().default(5),
  max_crown_level: z.number().int().default(5),
  unlock_after: z.string().uuid().optional(),
});

export const UpdateTopicSchema = z.object({
  name: z.string().min(1).optional(),
  description: z.string().optional(),
  icon_url: z.string().optional(),
  sort_order: z.number().int().optional(),
  total_lessons: z.number().int().optional(),
  max_crown_level: z.number().int().optional(),
  unlock_after: z.string().uuid().nullable().optional(),
});

// ── Steps ──────────────────────────────────────────────

export const CreateStepSchema = z.object({
  topic_id: z.string().uuid(),
  name: z.string().min(1),
  description: z.string().optional(),
  sort_order: z.number().int().default(0),
  tests_required: z.number().int().default(3),
  step_type: z.enum(["lesson", "reward"]).default("lesson"),
  reward_type: z.string().optional(),
  reward_amount: z.number().int().optional(),
});

// ── Tests ──────────────────────────────────────────────

export const CreateTestSchema = z.object({
  step_id: z.string().uuid(),
  name: z.string().min(1),
  sort_order: z.number().int().default(0),
});

export type CreateQuestionInput = z.infer<typeof CreateQuestionSchema>;
export type UpdateQuestionInput = z.infer<typeof UpdateQuestionSchema>;
export type BulkCreateQuestionsInput = z.infer<typeof BulkCreateQuestionsSchema>;
export type CreateTopicInput = z.infer<typeof CreateTopicSchema>;
export type UpdateTopicInput = z.infer<typeof UpdateTopicSchema>;
export type CreateStepInput = z.infer<typeof CreateStepSchema>;
export type CreateTestInput = z.infer<typeof CreateTestSchema>;
