import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("user_answers", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("session_id").references("id").inTable("quiz_sessions").onDelete("CASCADE");
    table.uuid("question_id").references("id").inTable("questions");
    table.uuid("answer_id").references("id").inTable("answers");
    table.boolean("is_correct");
    table.timestamp("answered_at").defaultTo(knex.fn.now());
    table.integer("time_spent");
    table.boolean("is_skipped").defaultTo(false);
  });

  await knex.raw("CREATE INDEX idx_user_answers_session ON user_answers(session_id)");
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("user_answers");
}
