import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("quiz_sessions", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("user_id").references("id").inTable("users").onDelete("CASCADE");
    table.uuid("topic_id").references("id").inTable("topics");
    table.text("session_type").defaultTo("lesson");
    table.timestamp("started_at").defaultTo(knex.fn.now());
    table.timestamp("finished_at");
    table.integer("score").defaultTo(0);
    table.integer("xp_earned").defaultTo(0);
    table.integer("duration");
    table.integer("total_questions").defaultTo(0);
    table.integer("correct_answers").defaultTo(0);
    table.integer("hearts_lost").defaultTo(0);
  });

  await knex.raw("CREATE INDEX idx_quiz_sessions_user ON quiz_sessions(user_id)");
  await knex.raw("CREATE INDEX idx_quiz_sessions_topic ON quiz_sessions(topic_id)");
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("quiz_sessions");
}
