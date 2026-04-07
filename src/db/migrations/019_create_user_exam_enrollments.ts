import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("user_exam_enrollments", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("user_id").references("id").inTable("users").onDelete("CASCADE").notNullable();
    table.uuid("exam_type_id").references("id").inTable("exam_types").onDelete("CASCADE").notNullable();
    table.timestamp("enrolled_at").defaultTo(knex.fn.now());
    table.boolean("is_active").defaultTo(true);
    table.unique(["user_id", "exam_type_id"]);
  });

  await knex.raw("CREATE INDEX idx_enrollments_user ON user_exam_enrollments(user_id)");
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("user_exam_enrollments");
}
