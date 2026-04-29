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

/** A single test within a step */
export interface TestDef {
  name: string;
  questions: McQ[];
}

/** A step (alt konu) within a topic */
export interface StepDef {
  name: string;
  tests: TestDef[];
}

/** A topic (konu) within a course */
export interface TopicDef {
  name: string;
  description: string;
  icon: string;
  steps: StepDef[];
}
