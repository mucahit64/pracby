/**
 * Shared types for seed content data files.
 */

/** Multiple-choice question data */
export type McQ = {
  text: string;
  img?: string;
  diff: number; // 1=kolay, 2=orta, 3=zor
  expl: string;
  hint?: string;
  answers: { text: string; ok: boolean }[];
};

/** A lesson step containing questions */
export interface LessonStep {
  questions: McQ[];
}

/** A reward step granting acorns */
export interface RewardStep {
  reward: true;
  amount?: number; // default 10
}

/** A step within a topic — either a lesson or a reward */
export type StepDef = LessonStep | RewardStep;

/** A topic (konu) within a course */
export interface TopicDef {
  name: string;
  description: string;
  steps: StepDef[];
}
