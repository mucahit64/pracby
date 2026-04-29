import type { Knex } from "knex";
import type { McQ, TopicDef } from "./types";

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

/** Create a full topic with steps → tests → questions hierarchy */
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
    icon_url: topic.icon,
    sort_order: sortOrder,
  });

  for (let si = 0; si < topic.steps.length; si++) {
    const sd = topic.steps[si];
    const step = await ins(knex, "steps", {
      topic_id: topicRow.id,
      name: sd.name,
      description: sd.name,
      sort_order: si + 1,
      tests_required: sd.tests.length,
      step_type: "lesson",
    });

    for (let ti = 0; ti < sd.tests.length; ti++) {
      const td = sd.tests[ti];
      const test = await ins(knex, "tests", {
        step_id: step.id,
        sort_order: ti + 1,
        name: td.name,
      });
      await seedMC(knex, td.questions, topicRow.id, step.id, test.id);
    }
  }
}
