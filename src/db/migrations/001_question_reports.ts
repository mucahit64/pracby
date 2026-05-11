import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("question_reports", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("question_id").references("id").inTable("questions").onDelete("CASCADE").notNullable();
    table.uuid("user_id").references("id").inTable("users").onDelete("SET NULL");
    table.text("reason").notNullable();
    table.text("description");
    table.text("status").notNullable().defaultTo("pending");
    table.text("admin_note");
    table.uuid("resolved_by").references("id").inTable("users").onDelete("SET NULL");
    table.timestamp("resolved_at");
    table.timestamp("created_at").defaultTo(knex.fn.now());

    table.unique(["question_id", "user_id"]);
    table.index("question_id");
    table.index("status");
    table.index("user_id");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("question_reports");
}
