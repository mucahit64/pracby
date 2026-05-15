import type { Knex } from "knex";

/**
 * Migration 005: Remove duplicate content from KPSS Önlisans and Ortaöğretim.
 * 
 * The original seeds incorrectly created identical topics and questions
 * for all KPSS exam types. Content should only exist under KPSS Lisans.
 * This migration removes the duplicated data from Önlisans and Ortaöğretim.
 */
export async function up(knex: Knex): Promise<void> {
  // Find KPSS Önlisans and Ortaöğretim exam type IDs
  const nonLisansTypes = await knex("exam_types")
    .join("exam_groups", "exam_types.exam_group_id", "exam_groups.id")
    .where("exam_groups.slug", "kpss")
    .whereIn("exam_types.slug", ["onlisans", "ortaogretim"])
    .select("exam_types.id");

  const examTypeIds = nonLisansTypes.map((t) => t.id);
  if (examTypeIds.length === 0) return;

  // Find courses under these exam types
  const courses = await knex("courses")
    .whereIn("exam_type_id", examTypeIds)
    .select("id");

  const courseIds = courses.map((c) => c.id);
  if (courseIds.length === 0) return;

  // Find topics under these courses
  const topics = await knex("topics")
    .whereIn("course_id", courseIds)
    .select("id");

  const topicIds = topics.map((t) => t.id);
  if (topicIds.length === 0) return;

  // Delete in dependency order: questions → steps → topics
  // Questions and answers will CASCADE from questions deletion
  await knex("questions").whereIn("topic_id", topicIds).delete();

  // Steps will CASCADE delete tests
  const steps = await knex("steps").whereIn("topic_id", topicIds).select("id");
  if (steps.length > 0) {
    await knex("steps").whereIn("topic_id", topicIds).delete();
  }

  // Delete topics
  await knex("topics").whereIn("course_id", courseIds).delete();
}

export async function down(_knex: Knex): Promise<void> {
  // Cannot easily restore deleted data — re-run seeds if needed
}
