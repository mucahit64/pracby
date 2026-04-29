import type { Knex } from "knex";
import { KPSS_GY_MATEMATIK_TOPICS } from "../content/kpss/lisans/gy/matematik";
import { createTopic } from "../content/helpers";

// ============================================================
// SEED 008 — KPSS Lisans Genel Yetenek: Matematik (Detaylı İçerik)
// ============================================================
// Kaynak: KPSS Lisans GY Matematik Test Kitabı
// Modüler veri dosyaları: src/db/content/kpss/lisans/gy/matematik/
// Idempotent: İlk topic adına göre kontrol edilir.
// ============================================================

export async function seed(knex: Knex): Promise<void> {
  // Idempotent guard
  const existing = await knex("topics")
    .where("name", "Temel Kavramlar")
    .first();
  if (existing) {
    console.log("008: KPSS Lisans GY Matematik içeriği zaten mevcut, atlanıyor.");
    return;
  }

  // KPSS Lisans Genel Yetenek modüllerindeki Matematik derslerini bul
  const gyModules = await knex("modules")
    .join("exam_types", "modules.exam_type_id", "exam_types.id")
    .join("exam_groups", "exam_types.exam_group_id", "exam_groups.id")
    .where("exam_groups.slug", "kpss")
    .where("modules.name", "Genel Yetenek")
    .where("modules.is_active", true)
    .select("modules.id as module_id");

  if (gyModules.length === 0) {
    throw new Error("008: KPSS Lisans Genel Yetenek modülü bulunamadı — 003_exam_structure seed çalıştırıldı mı?");
  }

  for (const mod of gyModules) {
    const matCourse = await knex("courses")
      .where({ module_id: mod.module_id, name: "Matematik" })
      .first();
    if (!matCourse) continue;

    for (let i = 0; i < KPSS_GY_MATEMATIK_TOPICS.length; i++) {
      await createTopic(knex, matCourse.id, KPSS_GY_MATEMATIK_TOPICS[i], i + 1);
    }
  }

  console.log("008: KPSS Lisans GY Matematik içeriği eklendi.");
}
