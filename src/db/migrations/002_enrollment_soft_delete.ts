import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("user_exam_enrollments", (table) => {
    table.timestamp("deleted_at").nullable().defaultTo(null);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("user_exam_enrollments", (table) => {
    table.dropColumn("deleted_at");
  });
}
