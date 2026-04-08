import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  // Add step_type to differentiate lesson steps from reward steps
  await knex.schema.alterTable("steps", (table) => {
    table.text("step_type").defaultTo("lesson").notNullable(); // lesson | reward
    table.text("reward_type"); // acorn | store_item (only for reward steps)
    table.integer("reward_amount"); // e.g. 10 acorn (only for reward steps)
    table.uuid("reward_item_id").references("id").inTable("store_items").onDelete("SET NULL"); // optional store item reward
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("steps", (table) => {
    table.dropColumn("step_type");
    table.dropColumn("reward_type");
    table.dropColumn("reward_amount");
    table.dropColumn("reward_item_id");
  });
}
