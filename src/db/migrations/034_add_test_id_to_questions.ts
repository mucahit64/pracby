import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("questions", (table) => {
    table.uuid("test_id").references("id").inTable("tests").onDelete("SET NULL");
    table.integer("sort_order").defaultTo(0).notNullable();
  });

  await knex.raw("CREATE INDEX idx_questions_test ON questions(test_id)");
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("questions", (table) => {
    table.dropColumn("test_id");
    table.dropColumn("sort_order");
  });
}
