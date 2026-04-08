import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("questions", (table) => {
    table.uuid("step_id").references("id").inTable("steps").onDelete("SET NULL");
  });

  await knex.raw("CREATE INDEX idx_questions_step ON questions(step_id)");
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("questions", (table) => {
    table.dropColumn("step_id");
  });
}
