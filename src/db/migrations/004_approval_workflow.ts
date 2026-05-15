import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  // Add status and created_by columns to topics table for approval workflow
  await knex.schema.alterTable("topics", (table) => {
    table.text("status").notNullable().defaultTo("approved");
    table.uuid("created_by").references("id").inTable("users").onDelete("SET NULL").nullable();
  });

  // Add index for filtering pending topics
  await knex.raw("CREATE INDEX idx_topics_status ON topics(status)");
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw("DROP INDEX IF EXISTS idx_topics_status");
  await knex.schema.alterTable("topics", (table) => {
    table.dropColumn("status");
    table.dropColumn("created_by");
  });
}
