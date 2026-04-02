import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("achievements", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.text("name").notNullable();
    table.text("description");
    table.text("icon_url");
    table.text("category");
    table.text("requirement_type").notNullable();
    table.integer("requirement_value").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("achievements");
}
