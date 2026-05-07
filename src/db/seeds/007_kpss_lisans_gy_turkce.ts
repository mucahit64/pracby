import type { Knex } from "knex";
import { KPSS_GY_TURKCE_TOPICS } from "../content/kpss/lisans/gy/turkce";
import { createTopic } from "../content/helpers";

// ============================================================
// SEED 007 — KPSS Lisans Genel Yetenek: Türkçe (Detaylı İçerik)
// ============================================================
// Kaynak: KPSS Lisans GY Türkçe Test Kitabı
// Modüler veri dosyaları: src/db/content/kpss/lisans/gy/turkce/
// Idempotent: İlk topic adına göre kontrol edilir.
// ============================================================

export async function seed(knex: Knex): Promise<void> {
  // Idempotent guard
  const existing = await knex("topics")
    .where("name", "Sözcükte Anlam")
    .first();
  if (existing) {
    console.log("007: KPSS Lisans GY Türkçe içeriği zaten mevcut, atlanıyor.");
    return;
  }

  // KPSS Lisans Genel Yetenek modüllerindeki Türkçe derslerini bul
  const gyModules = await knex("modules")
    .join("exam_types", "modules.exam_type_id", "exam_types.id")
    .join("exam_groups", "exam_types.exam_group_id", "exam_groups.id")
    .where("exam_groups.slug", "kpss")
    .where("modules.name", "Genel Yetenek")
    .where("modules.is_active", true)
    .select("modules.id as module_id");

  if (gyModules.length === 0) {
    throw new Error("007: KPSS Lisans Genel Yetenek modülü bulunamadı — 003_exam_structure seed çalıştırıldı mı?");
  }

  for (const mod of gyModules) {
    const turkceCourse = await knex("courses")
      .where({ module_id: mod.module_id, name: "Türkçe" })
      .first();
    if (!turkceCourse) continue;

    for (let i = 0; i < KPSS_GY_TURKCE_TOPICS.length; i++) {
      await createTopic(knex, turkceCourse.id, KPSS_GY_TURKCE_TOPICS[i], i + 1);
    }
  }

  console.log("007: KPSS Lisans GY Türkçe içeriği eklendi.");
}
