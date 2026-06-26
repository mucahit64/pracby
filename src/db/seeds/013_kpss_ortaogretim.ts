import type { Knex } from "knex";
import { createTopic } from "../content/helpers";

// Lisans içeriklerini geçici olarak Ortaöğretim için import ediyoruz
import { KPSS_GY_TURKCE_TOPICS } from "../content/kpss/lisans/gy/turkce";
import { KPSS_GY_MATEMATIK_TOPICS } from "../content/kpss/lisans/gy/matematik";
import { KPSS_GK_TARIH_TOPICS } from "../content/kpss/lisans/gk/tarih";
import { KPSS_GK_COGRAFYA_TOPICS } from "../content/kpss/lisans/gk/cografya";
import { KPSS_GK_VATANDASLIK_TOPICS } from "../content/kpss/lisans/gk/vatandaslik";

// ============================================================
// SEED 013 — KPSS Ortaöğretim Tüm Dersler (GY & GK)
// ============================================================
// Kaynak: Geçici olarak Lisans verisi kullanılıyor.
// ============================================================

export async function seed(knex: Knex): Promise<void> {
  const coursesData = [
    {
      moduleName: "Genel Yetenek",
      courseName: "Türkçe",
      checkTopic: "Sözcükte Anlam",
      topics: KPSS_GY_TURKCE_TOPICS,
    },
    {
      moduleName: "Genel Yetenek",
      courseName: "Matematik",
      checkTopic: "Temel Kavramlar",
      topics: KPSS_GY_MATEMATIK_TOPICS,
    },
    {
      moduleName: "Genel Kültür",
      courseName: "Tarih",
      checkTopic: "İlk Türk Devletleri",
      topics: KPSS_GK_TARIH_TOPICS,
    },
    {
      moduleName: "Genel Kültür",
      courseName: "Coğrafya",
      checkTopic: "Coğrafi Konum",
      topics: KPSS_GK_COGRAFYA_TOPICS,
    },
    {
      moduleName: "Genel Kültür",
      courseName: "Vatandaşlık",
      checkTopic: "Temel Hukuk Kavramları",
      topics: KPSS_GK_VATANDASLIK_TOPICS,
    },
  ];

  for (const data of coursesData) {
    // 1. İlgili modülü (Genel Yetenek veya Genel Kültür) KPSS Ortaöğretim için bul
    const moduleRecord = await knex("modules")
      .join("exam_types", "modules.exam_type_id", "exam_types.id")
      .join("exam_groups", "exam_types.exam_group_id", "exam_groups.id")
      .where("exam_groups.slug", "kpss")
      .where("exam_types.slug", "ortaogretim")
      .where("modules.name", data.moduleName)
      .where("modules.is_active", true)
      .select("modules.id as module_id")
      .first();

    if (!moduleRecord) {
      console.warn(`013: KPSS Ortaöğretim ${data.moduleName} modülü bulunamadı, ${data.courseName} dersi atlanıyor.`);
      continue;
    }

    // 2. Modülün altındaki ilgili dersi bul
    const course = await knex("courses")
      .where({ module_id: moduleRecord.module_id, name: data.courseName })
      .first();

    if (!course) {
      console.warn(`013: KPSS Ortaöğretim ${data.moduleName} modülünde ${data.courseName} dersi bulunamadı.`);
      continue;
    }

    // 3. Idempotent Guard (Ders içeriği daha önce eklenmiş mi kontrol et)
    const existing = await knex("topics")
      .where({ course_id: course.id, name: data.checkTopic })
      .first();

    if (existing) {
      console.log(`013: KPSS Ortaöğretim ${data.moduleName} - ${data.courseName} içeriği zaten mevcut, atlanıyor.`);
      continue;
    }

    // 4. Konuları ve içeriklerini ekle
    for (let i = 0; i < data.topics.length; i++) {
      await createTopic(knex, course.id, data.topics[i], i + 1);
    }

    console.log(`013: KPSS Ortaöğretim ${data.moduleName} - ${data.courseName} içeriği başarıyla eklendi.`);
  }
}