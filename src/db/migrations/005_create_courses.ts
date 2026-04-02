import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("courses", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.text("name").notNullable();
    table.text("description");
    table.text("icon_url");
    table.text("color");
    table.integer("sort_order").defaultTo(0);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("courses");
}
