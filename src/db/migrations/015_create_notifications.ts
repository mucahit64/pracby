import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("notifications", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("user_id").references("id").inTable("users").onDelete("CASCADE");
    table.text("type").notNullable();
    table.text("title").notNullable();
    table.text("body");
    table.boolean("is_read").defaultTo(false);
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });

  await knex.raw("CREATE INDEX idx_notifications_user ON notifications(user_id, is_read)");
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("notifications");
}
