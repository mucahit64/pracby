import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("quiz_sessions", (table) => {
    table.uuid("step_id").references("id").inTable("steps").onDelete("SET NULL");
    table.boolean("is_final_test").defaultTo(false).notNullable();
  });

  await knex.raw("CREATE INDEX idx_quiz_sessions_step ON quiz_sessions(step_id)");
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("quiz_sessions", (table) => {
    table.dropColumn("step_id");
    table.dropColumn("is_final_test");
  });
}
