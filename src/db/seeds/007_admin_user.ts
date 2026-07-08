import type { Knex } from "knex";
import bcrypt from "bcrypt";

export async function seed(knex: Knex): Promise<void> {
  const email = process.env.ADMIN_EMAIL || "admin@pracby.com";
  const username = process.env.ADMIN_USERNAME || "admin";
  const password = process.env.ADMIN_PASSWORD;

  if (!password) {
    console.warn("⚠️  ADMIN_PASSWORD not set in .env — skipping admin user seed");
    return;
  }

  // Admin rolü 003_rbac seed'inde oluşturulur.
  const adminRole = await knex("roles").where({ name: "admin" }).first();
  if (!adminRole) {
    throw new Error("007_admin_user: 'admin' rolü bulunamadı — 003_rbac seed çalıştırıldı mı?");
  }
  const adminRoleId = adminRole.id as string;

  const activeExamTypes = await knex("exam_types").where({ is_active: true }).orderBy("sort_order");
  const defaultExamType = activeExamTypes[0];

  const existing = await knex("users").where({ email }).first();
  if (existing) {
    // Ensure role_id points to admin role
    if (existing.role_id !== adminRoleId) {
      await knex("users").where({ id: existing.id }).update({ role_id: adminRoleId });
      console.log(`✅ Updated existing user "${email}" role to admin`);
    } else {
      console.log(`ℹ️  Admin user "${email}" already exists`);
    }
    // Ensure enrolled in all active exam types
    for (const examType of activeExamTypes) {
      await knex("user_exam_enrollments")
        .insert({ user_id: existing.id, exam_type_id: examType.id, is_active: true })
        .onConflict(["user_id", "exam_type_id"])
        .merge({ is_active: true });
    }
    if (defaultExamType && !existing.active_exam_type_id) {
      await knex("users").where({ id: existing.id }).update({ active_exam_type_id: defaultExamType.id });
    }
    return;
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const [user] = await knex("users")
    .insert({
      email,
      username,
      password_hash: passwordHash,
      role_id: adminRoleId,
      acorn_balance: 500,
      energy: 25,
      ...(defaultExamType && { active_exam_type_id: defaultExamType.id }),
    })
    .returning(["id"]);

  await knex("user_stats").insert({ user_id: user.id });

  // Enroll admin in all active exam types
  if (activeExamTypes.length > 0) {
    await knex("user_exam_enrollments").insert(
      activeExamTypes.map((et) => ({ user_id: user.id, exam_type_id: et.id, is_active: true }))
    );
  }

  console.log(`✅ Admin user created: ${email} (enrolled in ${activeExamTypes.length} exam type(s))`);
}
