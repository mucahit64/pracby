import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  // Collapse any pre-existing duplicate (user_id, item_id) rows before adding the constraint.
  await knex.raw(`
    DELETE FROM user_items a USING user_items b
    WHERE a.id > b.id AND a.user_id = b.user_id AND a.item_id = b.item_id
  `);

  await knex.schema.alterTable("user_items", (table) => {
    table.unique(["user_id", "item_id"]);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("user_items", (table) => {
    table.dropUnique(["user_id", "item_id"]);
  });
}
