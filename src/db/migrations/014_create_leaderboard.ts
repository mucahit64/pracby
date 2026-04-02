import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("leaderboard", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("user_id").references("id").inTable("users").onDelete("CASCADE");
    table.date("week_start").notNullable();
    table.integer("xp_earned").defaultTo(0);
    table.integer("rank");
    table.text("league").defaultTo("bronze");
    table.unique(["user_id", "week_start"]);
  });

  await knex.raw("CREATE INDEX idx_leaderboard_week ON leaderboard(week_start, xp_earned DESC)");
  await knex.raw("CREATE INDEX idx_leaderboard_league ON leaderboard(league, week_start)");
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("leaderboard");
}
