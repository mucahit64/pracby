import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("acorn_transactions", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("user_id").references("id").inTable("users").onDelete("CASCADE").notNullable();
    table.integer("amount").notNullable();
    table.text("type").notNullable(); // earned_quiz | earned_achievement | purchased | spent_store
    table.uuid("reference_id"); // quiz_session_id, achievement_id, store_item_id etc.
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });

  await knex.raw("CREATE INDEX idx_acorn_transactions_user ON acorn_transactions(user_id)");
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("acorn_transactions");
}
