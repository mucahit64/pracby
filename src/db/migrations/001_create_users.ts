import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "pgcrypto"');

  await knex.schema.createTable("users", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.text("email").unique().notNullable();
    table.text("username").unique().notNullable();
    table.text("password_hash").notNullable();
    table.text("avatar_url");
    table.integer("daily_goal_xp").defaultTo(50);
    table.integer("hearts").defaultTo(5);
    table.timestamp("hearts_refreshed_at").defaultTo(knex.fn.now());
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });

  await knex.raw("CREATE INDEX idx_users_email ON users(email)");
  await knex.raw("CREATE INDEX idx_users_username ON users(username)");
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("users");
}
