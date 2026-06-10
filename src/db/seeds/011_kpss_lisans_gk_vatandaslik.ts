import type { Knex } from "knex";
import { createTopic } from "../content/helpers";
import { KPSS_GK_VATANDASLIK_TOPICS } from "../content/kpss/lisans/gk/vatandaslik";
  
// ============================================================
// SEED 011 — KPSS Lisans Genel Kültür: Vatandaşlık
// ============================================================
// Kaynak: KPSS Lisans Genel Kültür Vatandaşlık Test Kitabı
// Modüler veri dosyaları: src/db/content/kpss/lisans/gk/vatandaslik/
// Idempotent: "Temel Hukuk Kavramları" topic varsa tüm insertler atlanır.
// ============================================================

export async function seed(knex: Knex): Promise<void> {
  // Idempotent guard
  const existing = await knex("topics").where("name", "Temel Hukuk Kavramları").first();
  if (existing) {
    console.log("011: KPSS Lisans Genel Kültür (Vatandaşlık) içeriği zaten mevcut, atlanıyor.");
    return;
  }

  // Find KPSS Lisans Genel Kültür module only
  const gkModules = await knex("modules")
    .join("exam_types", "modules.exam_type_id", "exam_types.id")
    .join("exam_groups", "exam_types.exam_group_id", "exam_groups.id")
    .where("exam_groups.slug", "kpss")
    .where("exam_types.slug", "lisans")
    .where("modules.name", "Genel Kültür")
    .where("modules.is_active", true)
    .select("modules.id as module_id");

  if (gkModules.length === 0) {
    throw new Error("011: KPSS Lisans Genel Kültür modülü bulunamadı — 003_exam_structure seed çalıştırıldı mı?");
  }

  for (const mod of gkModules) {
    const course = await knex("courses")
      .where({ module_id: mod.module_id, name: "Vatandaşlık" })
      .first();
    if (!course) continue;

    for (let i = 0; i < KPSS_GK_VATANDASLIK_TOPICS.length; i++) {
      await createTopic(knex, course.id, KPSS_GK_VATANDASLIK_TOPICS[i], i + 1);
    }
  }

  console.log("011: KPSS Lisans Genel Kültür (Vatandaşlık) içeriği eklendi.");
}
