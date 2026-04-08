import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("user_stats", (table) => {
    table.integer("current_streak").defaultTo(0);
    table.integer("quizzes_completed").defaultTo(0);
  });

  // Backfill current_streak from existing streak column
  await knex.raw("UPDATE user_stats SET current_streak = streak");
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("user_stats", (table) => {
    table.dropColumn("current_streak");
    table.dropColumn("quizzes_completed");
  });
}
