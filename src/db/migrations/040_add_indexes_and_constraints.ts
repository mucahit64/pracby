import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  // ── Performance indexes ────────────────────────────────
  await knex.schema.alterTable("questions", (t) => {
    t.index(["test_id", "sort_order"], "idx_questions_test_sort");
  });

  await knex.schema.alterTable("store_items", (t) => {
    t.index(["is_active"], "idx_store_items_active");
  });

  await knex.schema.alterTable("quiz_sessions", (t) => {
    t.index(["finished_at"], "idx_quiz_sessions_finished");
  });

  await knex.schema.alterTable("acorn_transactions", (t) => {
    t.index(["created_at"], "idx_acorn_transactions_created");
    t.index(["user_id", "type"], "idx_acorn_transactions_user_type");
  });

  await knex.schema.alterTable("user_active_effects", (t) => {
    t.index(["expires_at"], "idx_user_active_effects_expires");
  });

  // ── Data integrity constraints ─────────────────────────
  await knex.raw(`
    ALTER TABLE users ADD CONSTRAINT chk_hearts_non_negative CHECK (hearts >= 0);
  `);
  await knex.raw(`
    ALTER TABLE users ADD CONSTRAINT chk_acorn_balance_non_negative CHECK (acorn_balance >= 0);
  `);
  await knex.raw(`
    ALTER TABLE questions ADD CONSTRAINT chk_difficulty_range CHECK (difficulty >= 1 AND difficulty <= 3);
  `);
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw(`ALTER TABLE questions DROP CONSTRAINT IF EXISTS chk_difficulty_range;`);
  await knex.raw(`ALTER TABLE users DROP CONSTRAINT IF EXISTS chk_acorn_balance_non_negative;`);
  await knex.raw(`ALTER TABLE users DROP CONSTRAINT IF EXISTS chk_hearts_non_negative;`);

  await knex.schema.alterTable("user_active_effects", (t) => {
    t.dropIndex([], "idx_user_active_effects_expires");
  });
  await knex.schema.alterTable("acorn_transactions", (t) => {
    t.dropIndex([], "idx_acorn_transactions_user_type");
    t.dropIndex([], "idx_acorn_transactions_created");
  });
  await knex.schema.alterTable("quiz_sessions", (t) => {
    t.dropIndex([], "idx_quiz_sessions_finished");
  });
  await knex.schema.alterTable("store_items", (t) => {
    t.dropIndex([], "idx_store_items_active");
  });
  await knex.schema.alterTable("questions", (t) => {
    t.dropIndex([], "idx_questions_test_sort");
  });
}
