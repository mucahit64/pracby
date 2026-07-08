import type { Knex } from "knex";
import { createTopic } from "../content/helpers";
import type { TopicDef } from "../content/types";

import { KPSS_GY_TURKCE_TOPICS } from "../content/kpss/lisans/gy/turkce";
import { KPSS_GY_MATEMATIK_TOPICS } from "../content/kpss/lisans/gy/matematik";
import { KPSS_GK_TARIH_TOPICS } from "../content/kpss/lisans/gk/tarih";
import { KPSS_GK_COGRAFYA_TOPICS } from "../content/kpss/lisans/gk/cografya";
import { KPSS_GK_VATANDASLIK_TOPICS } from "../content/kpss/lisans/gk/vatandaslik";

// ============================================================
// SEED 006 — KPSS İçeriği (Tüm Türler: Lisans / Önlisans / Ortaöğretim)
// ============================================================
// Tek kaynak (Lisans içeriği) üç KPSS türüne de uygulanır.
// Hiyerarşi: exam_type → module → course → topics → steps → tests → questions
// Idempotent: her (course_id, ilk konu adı) çifti kontrol edilir.
// ============================================================

// KPSS içeriğinin uygulanacağı sınav türleri (slug)
const TARGET_EXAM_TYPES = ["lisans", "onlisans", "ortaogretim"] as const;

interface CourseContent {
  moduleName: string;
  courseName: string;
  checkTopic: string;
  topics: TopicDef[];
}

// Ders bazlı içerik tanımı (kaynak: Lisans içerik dosyaları)
const COURSE_CONTENT: CourseContent[] = [
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

export async function seed(knex: Knex): Promise<void> {
  for (const examTypeSlug of TARGET_EXAM_TYPES) {
    for (const content of COURSE_CONTENT) {
      // 1. İlgili modülü KPSS + sınav türü için bul
      const moduleRecord = await knex("modules")
        .join("exam_types", "modules.exam_type_id", "exam_types.id")
        .join("exam_groups", "exam_types.exam_group_id", "exam_groups.id")
        .where("exam_groups.slug", "kpss")
        .where("exam_types.slug", examTypeSlug)
        .where("modules.name", content.moduleName)
        .where("modules.is_active", true)
        .select("modules.id as module_id")
        .first();

      if (!moduleRecord) {
        console.warn(
          `006: KPSS ${examTypeSlug} ${content.moduleName} modülü bulunamadı, ${content.courseName} atlanıyor.`,
        );
        continue;
      }

      // 2. Modülün altındaki dersi bul
      const course = await knex("courses")
        .where({ module_id: moduleRecord.module_id, name: content.courseName })
        .first();

      if (!course) {
        console.warn(
          `006: KPSS ${examTypeSlug} ${content.moduleName} modülünde ${content.courseName} dersi bulunamadı.`,
        );
        continue;
      }

      // 3. Idempotent guard (bu dersin içeriği daha önce eklenmiş mi?)
      const existing = await knex("topics")
        .where({ course_id: course.id, name: content.checkTopic })
        .first();

      if (existing) {
        console.log(
          `006: KPSS ${examTypeSlug} ${content.moduleName} - ${content.courseName} içeriği zaten mevcut, atlanıyor.`,
        );
        continue;
      }

      // 4. Konuları ve içeriklerini ekle
      for (let i = 0; i < content.topics.length; i++) {
        await createTopic(knex, course.id, content.topics[i], i + 1);
      }

      console.log(
        `006: KPSS ${examTypeSlug} ${content.moduleName} - ${content.courseName} içeriği eklendi.`,
      );
    }
  }
}
