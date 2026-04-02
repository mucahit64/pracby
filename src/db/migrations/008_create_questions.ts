import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("questions", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("topic_id").references("id").inTable("topics").onDelete("CASCADE");
    table.text("question_text").notNullable();
    table.text("question_type").defaultTo("multiple_choice");
    table.integer("difficulty").defaultTo(1);
    table.text("status").defaultTo("pending");
    table.text("hint");
    table.specificType("tags", "text[]");
    table.float("difficulty_weight").defaultTo(1.0);
    table.uuid("created_by").references("id").inTable("users");
    table.text("explanation");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });

  await knex.raw("CREATE INDEX idx_questions_topic ON questions(topic_id)");
  await knex.raw("CREATE INDEX idx_questions_status ON questions(status)");
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("questions");
}
