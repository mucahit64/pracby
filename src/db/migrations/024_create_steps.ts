import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("steps", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("topic_id").references("id").inTable("topics").onDelete("CASCADE").notNullable();
    table.text("name").notNullable();
    table.text("description");
    table.integer("sort_order").defaultTo(0);
    table.integer("tests_required").defaultTo(5).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });

  await knex.raw("CREATE INDEX idx_steps_topic ON steps(topic_id)");
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("steps");
}
