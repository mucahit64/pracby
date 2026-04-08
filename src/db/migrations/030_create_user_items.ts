import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("user_items", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("user_id").references("id").inTable("users").onDelete("CASCADE").notNullable();
    table.uuid("item_id").references("id").inTable("store_items").onDelete("CASCADE").notNullable();
    table.integer("quantity").defaultTo(1).notNullable();
    table.timestamp("purchased_at").defaultTo(knex.fn.now());
  });

  await knex.raw("CREATE INDEX idx_user_items_user ON user_items(user_id)");
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("user_items");
}
