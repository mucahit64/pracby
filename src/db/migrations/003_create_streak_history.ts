import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("streak_history", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("user_id").references("id").inTable("users").onDelete("CASCADE");
    table.date("date").notNullable();
    table.integer("xp_earned").defaultTo(0);
    table.integer("quizzes_completed").defaultTo(0);
    table.unique(["user_id", "date"]);
  });

  await knex.raw("CREATE INDEX idx_streak_history_user_date ON streak_history(user_id, date)");
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("streak_history");
}
