import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("user_active_effects", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("user_id").references("id").inTable("users").onDelete("CASCADE").notNullable();
    table.text("item_type").notNullable(); // streak_freeze | unlimited_lives | xp_boost
    table.timestamp("expires_at").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.unique(["user_id", "item_type"]);
  });

  await knex.raw("CREATE INDEX idx_user_active_effects_user ON user_active_effects(user_id)");
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("user_active_effects");
}
