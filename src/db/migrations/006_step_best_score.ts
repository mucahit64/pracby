import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("user_step_progress", (table) => {
    table.integer("best_score").notNullable().defaultTo(0);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("user_step_progress", (table) => {
    table.dropColumn("best_score");
  });
}
