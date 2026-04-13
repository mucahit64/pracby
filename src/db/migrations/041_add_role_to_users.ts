import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("users", (table) => {
    table.text("role").notNullable().defaultTo("user");
  });

  await knex.raw(`
    ALTER TABLE users ADD CONSTRAINT chk_users_role CHECK (role IN ('user', 'admin'));
  `);
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw(`ALTER TABLE users DROP CONSTRAINT IF EXISTS chk_users_role;`);
  await knex.schema.alterTable("users", (table) => {
    table.dropColumn("role");
  });
}
