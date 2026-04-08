import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("quiz_sessions", (table) => {
    table.uuid("test_id").references("id").inTable("tests").onDelete("SET NULL");
  });

  await knex.raw("CREATE INDEX idx_quiz_sessions_test ON quiz_sessions(test_id)");

  // Track reward claims
  await knex.schema.createTable("user_reward_claims", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("user_id").references("id").inTable("users").onDelete("CASCADE").notNullable();
    table.uuid("step_id").references("id").inTable("steps").onDelete("CASCADE").notNullable();
    table.timestamp("claimed_at").defaultTo(knex.fn.now());
    table.unique(["user_id", "step_id"]);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("user_reward_claims");
  await knex.schema.alterTable("quiz_sessions", (table) => {
    table.dropColumn("test_id");
  });
}
