import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("user_achievements", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("user_id").references("id").inTable("users").onDelete("CASCADE");
    table.uuid("achievement_id").references("id").inTable("achievements").onDelete("CASCADE");
    table.timestamp("earned_at").defaultTo(knex.fn.now());
    table.unique(["user_id", "achievement_id"]);
  });

  await knex.raw("CREATE INDEX idx_user_achievements_user ON user_achievements(user_id)");
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("user_achievements");
}
