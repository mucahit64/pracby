import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("user_topic_progress", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("user_id").references("id").inTable("users").onDelete("CASCADE");
    table.uuid("topic_id").references("id").inTable("topics").onDelete("CASCADE");
    table.integer("crown_level").defaultTo(0);
    table.integer("lessons_completed").defaultTo(0);
    table.boolean("is_unlocked").defaultTo(false);
    table.timestamp("last_practiced_at");
    table.float("strength").defaultTo(1.0);
    table.timestamp("next_review_at");
    table.unique(["user_id", "topic_id"]);
  });

  await knex.raw("CREATE INDEX idx_user_topic_progress_user ON user_topic_progress(user_id)");
  await knex.raw("CREATE INDEX idx_user_topic_progress_topic ON user_topic_progress(topic_id)");
  await knex.raw("CREATE INDEX idx_user_topic_progress_review ON user_topic_progress(next_review_at)");
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("user_topic_progress");
}
