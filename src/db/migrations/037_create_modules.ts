import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("modules", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("exam_type_id").references("id").inTable("exam_types").onDelete("CASCADE").notNullable();
    table.text("name").notNullable();
    table.text("description");
    table.text("icon_url");
    table.integer("sort_order").defaultTo(0).notNullable();
    table.boolean("is_active").defaultTo(true).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });

  await knex.raw("CREATE INDEX idx_modules_exam_type ON modules(exam_type_id)");
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("modules");
}
