import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  // Guests have no user row; they are identified by a client-generated id kept in localStorage.
  await knex.schema.alterTable("question_reports", (table) => {
    table.uuid("guest_id");
    table.unique(["question_id", "guest_id"]);
    table.index("guest_id");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("question_reports", (table) => {
    table.dropIndex("guest_id");
    table.dropUnique(["question_id", "guest_id"]);
    table.dropColumn("guest_id");
  });
}
