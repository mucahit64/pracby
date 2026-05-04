import type { Knex } from "knex";
import type { McQ, TopicDef, StepDef } from "./types";

/**
 * Shared seed helper functions.
 */

interface InsertedRow {
  id: string;
}

/** Insert a row and return the inserted record */
export async function ins(knex: Knex, table: string, data: object): Promise<InsertedRow> {
  const [row] = await knex(table).insert(data).returning("*");
  return row as InsertedRow;
}

/** Bulk-insert multiple-choice questions into a test */
export async function seedMC(
  knex: Knex,
  questions: McQ[],
  topicId: string,
  stepId: string,
  testId: string,
): Promise<void> {
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const question = await ins(knex, "questions", {
      topic_id: topicId,
      step_id: stepId,
      test_id: testId,
      question_text: q.text,
      image_url: q.img ?? null,
      question_type: "multiple_choice",
      difficulty: q.diff,
      status: "approved",
      explanation: q.expl,
      hint: q.hint ?? null,
      sort_order: i + 1,
      point_value: 1,
    });
    for (const a of q.answers) {
      await knex("answers").insert({
        question_id: question.id,
        answer_text: a.text,
        is_correct: a.ok,
      });
    }
  }
}

/** Type guard for reward steps */
function isRewardStep(step: StepDef): step is { reward: true; amount?: number } {
  return "reward" in step;
}

/** Create a full topic with steps → questions hierarchy */
export async function createTopic(
  knex: Knex,
  courseId: string,
  topic: TopicDef,
  sortOrder: number,
): Promise<void> {
  const topicRow = await ins(knex, "topics", {
    course_id: courseId,
    name: topic.name,
    description: topic.description,
    icon_url: "",
    sort_order: sortOrder,
  });

  for (let si = 0; si < topic.steps.length; si++) {
    const sd = topic.steps[si];

    if (isRewardStep(sd)) {
      await ins(knex, "steps", {
        topic_id: topicRow.id,
        name: "",
        description: "",
        sort_order: si + 1,
        tests_required: 0,
        step_type: "reward",
        reward_type: "acorn",
        reward_amount: sd.amount ?? 10,
      });
    } else {
      const step = await ins(knex, "steps", {
        topic_id: topicRow.id,
        name: "",
        description: "",
        sort_order: si + 1,
        tests_required: 1,
        step_type: "lesson",
      });

      const test = await ins(knex, "tests", {
        step_id: step.id,
        sort_order: 1,
        name: "",
      });
      await seedMC(knex, sd.questions, topicRow.id, step.id, test.id);
    }
  }
}
