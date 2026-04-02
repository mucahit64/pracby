import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("friendships", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("user_id").references("id").inTable("users").onDelete("CASCADE");
    table.uuid("friend_id").references("id").inTable("users").onDelete("CASCADE");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.integer("status").notNullable().defaultTo(0);
    table.unique(["user_id", "friend_id"]);
  });

  await knex.raw("CREATE INDEX idx_friendships_user ON friendships(user_id)");
  await knex.raw("CREATE INDEX idx_friendships_friend ON friendships(friend_id)");
  await knex.raw("CREATE INDEX idx_friendships_status ON friendships(status)");
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("friendships");
}
