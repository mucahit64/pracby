import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("topics", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("course_id").references("id").inTable("courses").onDelete("CASCADE");
    table.text("name").notNullable();
    table.text("description");
    table.text("icon_url");
    table.integer("sort_order").defaultTo(0);
    table.integer("total_lessons").defaultTo(5);
    table.integer("max_crown_level").defaultTo(5);
    table.uuid("unlock_after").references("id").inTable("topics");
  });

  await knex.raw("CREATE INDEX idx_topics_course ON topics(course_id)");
  await knex.raw("CREATE INDEX idx_topics_sort ON topics(course_id, sort_order)");
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("topics");
}
