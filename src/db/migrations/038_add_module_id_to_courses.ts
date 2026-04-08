import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("courses", (table) => {
    table.uuid("module_id").references("id").inTable("modules").onDelete("SET NULL").nullable();
  });

  await knex.raw("CREATE INDEX idx_courses_module ON courses(module_id)");
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("courses", (table) => {
    table.dropColumn("module_id");
  });
}
