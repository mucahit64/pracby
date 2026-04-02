import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("answers", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("question_id").references("id").inTable("questions").onDelete("CASCADE");
    table.text("answer_text").notNullable();
    table.boolean("is_correct").defaultTo(false);
  });

  await knex.raw("CREATE INDEX idx_answers_question ON answers(question_id)");
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("answers");
}
