import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("store_items", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.text("name").notNullable();
    table.text("description");
    table.text("icon_url");
    table.integer("price_acorn").notNullable();
    table.text("item_type").notNullable(); // streak_freeze | unlimited_lives | xp_boost
    table.integer("duration_hours"); // null = permanent/one-time use
    table.boolean("is_active").defaultTo(true).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("store_items");
}
