import type { Knex } from "knex";

// A topic's final (the boss on the lesson map) is kept like a lesson: the best score and
// when it was first finished. user_topic_progress already comes with the course map.
export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("user_topic_progress", (table) => {
    table.integer("final_best_score").notNullable().defaultTo(0);
    table.timestamp("final_completed_at", { useTz: true });
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("user_topic_progress", (table) => {
    table.dropColumn("final_best_score");
    table.dropColumn("final_completed_at");
  });
}
