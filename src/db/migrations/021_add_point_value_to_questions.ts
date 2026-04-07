import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("questions", (table) => {
    table.integer("point_value").defaultTo(1).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("questions", (table) => {
    table.dropColumn("point_value");
  });
}
