import type { Knex } from "knex";

/**
 * Migration: 003_rbac_setup
 *
 * Kurulan tablolar: roles, permissions, role_permissions
 * users tablosu değişikliği:
 *   - eski `role` TEXT kolonu ve CHECK constraint kaldırılıyor
 *   - yeni `role_id` UUID FK (roles.id) ekleniyor
 */

export async function up(knex: Knex): Promise<void> {
  // ── 1. roles ──────────────────────────────────────────────────────────────
  await knex.schema.createTable("roles", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.text("name").unique().notNullable();
    table.text("description").nullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });

  await knex.raw("CREATE INDEX idx_roles_name ON roles(name)");

  // ── 2. permissions ────────────────────────────────────────────────────────
  await knex.schema.createTable("permissions", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.text("name").unique().notNullable();
    table.text("description").nullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });

  await knex.raw("CREATE INDEX idx_permissions_name ON permissions(name)");

  // ── 3. role_permissions (Çoka-Çok Köprü Tablosu) ─────────────────────────
  await knex.schema.createTable("role_permissions", (table) => {
    table
      .uuid("role_id")
      .references("id")
      .inTable("roles")
      .onDelete("CASCADE")
      .notNullable();
    table
      .uuid("permission_id")
      .references("id")
      .inTable("permissions")
      .onDelete("CASCADE")
      .notNullable();

    // Composite primary key
    table.primary(["role_id", "permission_id"]);
  });

  await knex.raw(
    "CREATE INDEX idx_role_permissions_role_id ON role_permissions(role_id)"
  );
  await knex.raw(
    "CREATE INDEX idx_role_permissions_permission_id ON role_permissions(permission_id)"
  );

  // ── 4. users tablosu: eski role TEXT → role_id UUID FK ───────────────────
  // Eski CHECK constraint'i kaldır
  await knex.raw(
    "ALTER TABLE users DROP CONSTRAINT IF EXISTS chk_users_role"
  );

  await knex.schema.alterTable("users", (table) => {
    // Eski role TEXT kolonunu kaldır
    table.dropColumn("role");

    // Yeni role_id UUID FK ekle
    // Tabloda henüz veri yok, doğrudan notNullable() kullanılabilir
    table
      .uuid("role_id")
      .references("id")
      .inTable("roles")
      .onDelete("RESTRICT")
      .notNullable();
  });

  await knex.raw("CREATE INDEX idx_users_role_id ON users(role_id)");
}

export async function down(knex: Knex): Promise<void> {
  // ── 1. users tablosu: role_id → role TEXT ────────────────────────────────
  await knex.raw("DROP INDEX IF EXISTS idx_users_role_id");

  await knex.schema.alterTable("users", (table) => {
    table.dropColumn("role_id");
  });

  // role TEXT kolonu nullable olarak ekle, sonra NOT NULL yap
  await knex.schema.alterTable("users", (table) => {
    table.text("role").nullable();
  });

  // Mevcut kayıtlar için default değer ata
  await knex("users").update({ role: "user" });

  await knex.schema.alterTable("users", (table) => {
    table.text("role").notNullable().alter();
  });

  await knex.raw(
    "ALTER TABLE users ADD CONSTRAINT chk_users_role CHECK (role IN ('user', 'admin'))"
  );

  // ── 2. role_permissions ───────────────────────────────────────────────────
  await knex.raw(
    "DROP INDEX IF EXISTS idx_role_permissions_permission_id"
  );
  await knex.raw(
    "DROP INDEX IF EXISTS idx_role_permissions_role_id"
  );
  await knex.schema.dropTableIfExists("role_permissions");

  // ── 3. permissions ────────────────────────────────────────────────────────
  await knex.raw("DROP INDEX IF EXISTS idx_permissions_name");
  await knex.schema.dropTableIfExists("permissions");

  // ── 4. roles ──────────────────────────────────────────────────────────────
  await knex.raw("DROP INDEX IF EXISTS idx_roles_name");
  await knex.schema.dropTableIfExists("roles");
}
