import type { Knex } from "knex";

/**
 * Seed: 003_rbac
 *
 * 1. Temel rolleri ekler: admin, teacher, student
 * 2. Temel yetkileri ekler: view_admin_panel, manage_users, manage_exams
 * 3. Rol-Yetki ilişkilerini kurar:
 *    - admin  → tüm yetkiler
 *    - teacher → view_admin_panel + manage_exams
 *    - student → (yetki yok)
 *
 * Admin kullanıcısının oluşturulması/atanması 007_admin_user seed'inde yapılır.
 * Tüm adımlar idempotent olarak yazılmıştır (tekrar çalıştırılabilir).
 */

interface Role {
  id: string;
  name: string;
}

interface Permission {
  id: string;
  name: string;
}

const ROLES = [
  { name: "admin", description: "Tam yetkili sistem yöneticisi" },
  { name: "teacher", description: "Sınav ve içerik yönetebilen öğretmen" },
  { name: "student", description: "Sınav çözebilen standart öğrenci" },
] as const;

const PERMISSIONS = [
  { name: "view_admin_panel", description: "Admin paneline erişim yetkisi" },
  { name: "manage_users", description: "Kullanıcıları listeleme, düzenleme ve silme yetkisi" },
  { name: "manage_exams", description: "Sınav ve soru oluşturma/düzenleme/silme yetkisi" },
] as const;

export async function seed(knex: Knex): Promise<void> {
  // ── 1. Rolleri ekle (idempotent) ─────────────────────────────────────────
  const existingRoles = await knex("roles").select("name");
  const existingRoleNames = new Set(existingRoles.map((r) => r.name));

  const rolesToInsert = ROLES.filter((r) => !existingRoleNames.has(r.name));
  if (rolesToInsert.length > 0) {
    await knex("roles").insert(rolesToInsert);
  }

  // Güncel ID'leriyle tüm rolleri çek
  const roles: Role[] = await knex("roles")
    .whereIn("name", ROLES.map((r) => r.name))
    .select("id", "name");

  const roleMap = new Map(roles.map((r) => [r.name, r.id]));

  // Gerekli rollerin varlığını doğrula
  for (const { name } of ROLES) {
    if (!roleMap.has(name)) {
      throw new Error(`[010_rbac_seed] '${name}' rolü bulunamadı.`);
    }
  }

  // ── 2. Yetkileri ekle (idempotent) ───────────────────────────────────────
  const existingPermissions = await knex("permissions").select("name");
  const existingPermissionNames = new Set(existingPermissions.map((p) => p.name));

  const permissionsToInsert = PERMISSIONS.filter(
    (p) => !existingPermissionNames.has(p.name)
  );
  if (permissionsToInsert.length > 0) {
    await knex("permissions").insert(permissionsToInsert);
  }

  // Güncel ID'leriyle tüm yetkileri çek
  const permissions: Permission[] = await knex("permissions")
    .whereIn("name", PERMISSIONS.map((p) => p.name))
    .select("id", "name");

  const permissionMap = new Map(permissions.map((p) => [p.name, p.id]));

  // Gerekli yetkilerin varlığını doğrula
  for (const { name } of PERMISSIONS) {
    if (!permissionMap.has(name)) {
      throw new Error(`[010_rbac_seed] '${name}' yetkisi bulunamadı.`);
    }
  }

  // ── 3. Rol-Yetki ilişkilerini kur (idempotent) ───────────────────────────
  const adminRoleId = roleMap.get("admin")!;
  const teacherRoleId = roleMap.get("teacher")!;

  // admin → tüm yetkiler
  const adminPermissions = permissions.map((p) => ({
    role_id: adminRoleId,
    permission_id: p.id,
  }));

  // teacher → view_admin_panel + manage_exams
  const teacherPermissions = [
    {
      role_id: teacherRoleId,
      permission_id: permissionMap.get("view_admin_panel")!,
    },
    {
      role_id: teacherRoleId,
      permission_id: permissionMap.get("manage_exams")!,
    },
  ];

  const allRolePermissions = [...adminPermissions, ...teacherPermissions];

  // onConflict().ignore() ile idempotent upsert
  for (const entry of allRolePermissions) {
    await knex("role_permissions")
      .insert(entry)
      .onConflict(["role_id", "permission_id"])
      .ignore();
  }

  // student rolüne kasıtlı olarak hiçbir yetki bağlanmıyor
}
