import type { Knex } from "knex";

// Days covered by an activated Seri Dondurma (streak freeze). A frozen day keeps
// the streak going without adding to it; quizzes_completed stays 0 unless the
// user also played that day. See src/modules/user/streak.ts.
export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("streak_history", (table) => {
    table.boolean("frozen").notNullable().defaultTo(false);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex("streak_history").where({ frozen: true, quizzes_completed: 0 }).delete();
  await knex.schema.alterTable("streak_history", (table) => {
    table.dropColumn("frozen");
  });
}
