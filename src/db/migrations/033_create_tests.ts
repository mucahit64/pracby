import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("tests", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("step_id").references("id").inTable("steps").onDelete("CASCADE").notNullable();
    table.integer("sort_order").defaultTo(0).notNullable();
    table.text("name"); // optional label, e.g. "Test 1"
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });

  await knex.raw("CREATE INDEX idx_tests_step ON tests(step_id)");
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("tests");
}
