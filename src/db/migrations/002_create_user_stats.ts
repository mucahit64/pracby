import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("user_stats", (table) => {
    table.uuid("user_id").primary().references("id").inTable("users").onDelete("CASCADE");
    table.integer("xp").defaultTo(0);
    table.integer("level").defaultTo(1);
    table.integer("streak").defaultTo(0);
    table.integer("total_xp").defaultTo(0);
    table.integer("max_streak").defaultTo(0);
    table.integer("daily_xp").defaultTo(0);
    table.integer("weekly_xp").defaultTo(0);
    table.timestamp("updated_at").defaultTo(knex.fn.now());
    table.date("last_active_date");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("user_stats");
}
