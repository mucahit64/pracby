import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("courses", (table) => {
    table.uuid("exam_type_id").references("id").inTable("exam_types").onDelete("SET NULL").nullable();
  });

  await knex.raw("CREATE INDEX idx_courses_exam_type ON courses(exam_type_id)");
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("courses", (table) => {
    table.dropColumn("exam_type_id");
  });
}
