import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("store_items", (table) => {
    table.jsonb("metadata").defaultTo("{}").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("store_items", (table) => {
    table.dropColumn("metadata");
  });
}
