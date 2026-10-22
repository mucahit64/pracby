import type { Knex } from "knex";

// The questions a session was started with, so finishing it only accepts answers to
// those questions (once each). Sessions started before this migration have NULL.
export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("quiz_sessions", (table) => {
    table.jsonb("question_ids");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("quiz_sessions", (table) => {
    table.dropColumn("question_ids");
  });
}
