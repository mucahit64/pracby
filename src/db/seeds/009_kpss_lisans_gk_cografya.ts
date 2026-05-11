import type { Knex } from "knex";
import { createTopic } from "../content/helpers";
import { KPSS_GK_COGRAFYA_TOPICS } from "../content/kpss/lisans/gk/cografya";
  
// ============================================================
// SEED 009 — KPSS Lisans Genel Kültür: Coğrafya
// ============================================================
// Kaynak: KPSS Lisans Genel Kültür Coğrafya Test Kitabı
// Modüler veri dosyaları: src/db/content/kpss/lisans/gk/cografya/
// Idempotent: "Türkiye'nin Coğrafi Konumu" topic varsa tüm insertler atlanır.
// ============================================================

export async function seed(knex: Knex): Promise<void> {
  // Idempotent guard
  const existing = await knex("topics").where("name", "Türkiye'nin Coğrafi Konumu").first();
  if (existing) {
    console.log("009: KPSS Lisans Genel Kültür (Coğrafya) içeriği zaten mevcut, atlanıyor.");
    return;
  }

  // Find all KPSS Lisans Genel Kültür modules
  const gkModules = await knex("modules")
    .join("exam_types", "modules.exam_type_id", "exam_types.id")
    .join("exam_groups", "exam_types.exam_group_id", "exam_groups.id")
    .where("exam_groups.slug", "kpss")
    .where("modules.name", "Genel Kültür")
    .where("modules.is_active", true)
    .select("modules.id as module_id");

  if (gkModules.length === 0) {
    throw new Error("009: KPSS Lisans Genel Kültür modülü bulunamadı — 003_exam_structure seed çalıştırıldı mı?");
  }

  for (const mod of gkModules) {
    const course = await knex("courses")
      .where({ module_id: mod.module_id, name: "Coğrafya" })
      .first();
    if (!course) continue;

    for (let i = 0; i < KPSS_GK_COGRAFYA_TOPICS.length; i++) {
      await createTopic(knex, course.id, KPSS_GK_COGRAFYA_TOPICS[i], i + 1);
    }
  }

  console.log("009: KPSS Lisans Genel Kültür (Coğrafya) içeriği eklendi.");
}
