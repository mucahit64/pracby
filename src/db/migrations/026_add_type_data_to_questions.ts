import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("questions", (table) => {
    table.jsonb("type_data"); // structured data for matching, ordering, fill_blank etc.
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("questions", (table) => {
    table.dropColumn("type_data");
  });
}
