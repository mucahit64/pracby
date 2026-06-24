import type { Knex } from "knex";

// ============================================================
// SEED 004 — Courses (Dersler)
// ============================================================
// Hiyerarşi: modules (oturumlar) → courses (dersler)
//
// YKS-TYT:
//   Türkçe | Matematik | Sosyal Bilimler | Fen Bilimleri
// YKS-AYT Sayısal:
//   Matematik | Fizik | Kimya | Biyoloji
// YKS-AYT Sözel:
//   Türk Dili ve Edebiyatı | Tarih 1 | Coğrafya 1 | Felsefe Grubu
// YKS-AYT Eşit Ağırlık:
//   Türk Dili ve Edebiyatı | Matematik | Tarih 1 | Coğrafya 1
//
// KPSS Genel Yetenek (tüm KPSS türleri):
//   Türkçe | Matematik
// KPSS Genel Kültür (tüm KPSS türleri):
//   Tarih | Coğrafya | Vatandaşlık
//
// Idempotent: (module_id, name) bazlı Set check.
// ============================================================

// ---------- Course Definitions ----------

interface CourseDef {
  name: string;
  description: string;
  icon_url: string;
  color: string;
  sort_order: number;
}

const TYT_COURSES: CourseDef[] = [
  { name: "Türkçe",           description: "Dil bilgisi ve okuma anlama",    icon_url: "📝", color: "#3b82f6", sort_order: 1 },
  { name: "Matematik",        description: "Temel matematik ve problem çözme",icon_url: "🔢", color: "#8b5cf6", sort_order: 2 },
  { name: "Sosyal Bilimler",  description: "Tarih, Coğrafya, Vatandaşlık",    icon_url: "🌍", color: "#ef4444", sort_order: 3 },
  { name: "Fen Bilimleri",    description: "Fizik, Kimya, Biyoloji",          icon_url: "🔬", color: "#10b981", sort_order: 4 },
];

const AYT_SAYISAL_COURSES: CourseDef[] = [
  { name: "Matematik", description: "İleri düzey matematik",    icon_url: "🔢", color: "#8b5cf6", sort_order: 1 },
  { name: "Fizik",     description: "Mekanik, Elektrik, Optik", icon_url: "⚡", color: "#f59e0b", sort_order: 2 },
  { name: "Kimya",     description: "Atomdan Moleküle, Kimyanın Dili", icon_url: "🧪", color: "#6366f1", sort_order: 3 },
  { name: "Biyoloji",  description: "Hücre, Genetik, Ekosistem",icon_url: "🧬", color: "#22c55e", sort_order: 4 },
];

const AYT_SOZEL_COURSES: CourseDef[] = [
  { name: "Türk Dili ve Edebiyatı", description: "Divan edebiyatı, roman, şiir analizi", icon_url: "📖", color: "#3b82f6", sort_order: 1 },
  { name: "Tarih 1",                description: "İlkçağdan Osmanlıya Türk tarihi",       icon_url: "🏛️", color: "#ef4444", sort_order: 2 },
  { name: "Coğrafya 1",             description: "Doğal coğrafya ve Türkiye coğrafyası",  icon_url: "🗺️", color: "#10b981", sort_order: 3 },
  { name: "Felsefe Grubu",          description: "Felsefe, Psikoloji, Sosyoloji, Mantık", icon_url: "🤔", color: "#a855f7", sort_order: 4 },
];

const AYT_EA_COURSES: CourseDef[] = [
  { name: "Türk Dili ve Edebiyatı", description: "Div. edebiyatı, roman, şiir analizi",  icon_url: "📖", color: "#3b82f6", sort_order: 1 },
  { name: "Matematik",              description: "İleri düzey matematik",                 icon_url: "🔢", color: "#8b5cf6", sort_order: 2 },
  { name: "Tarih 1",                description: "İlkçağdan Osmanlıya Türk tarihi",       icon_url: "🏛️", color: "#ef4444", sort_order: 3 },
  { name: "Coğrafya 1",             description: "Doğal coğrafya ve Türkiye coğrafyası",  icon_url: "🗺️", color: "#10b981", sort_order: 4 },
];

const KPSS_GY_COURSES: CourseDef[] = [
  { name: "Türkçe",    description: "Sözcük, dil bilgisi, anlama", icon_url: "📝", color: "#3b82f6", sort_order: 1 },
  { name: "Matematik", description: "Sayısal akıl yürütme", icon_url: "🔢", color: "#8b5cf6", sort_order: 2 },
];

const KPSS_GK_COURSES: CourseDef[] = [
  { name: "Tarih",        description: "Kurtuluş savaşı ve Türk inkılabı", icon_url: "🇹🇷", color: "#ef4444", sort_order: 1 },
  { name: "Coğrafya",     description: "Türkiye ve dünya coğrafyası", icon_url: "🗺️", color: "#10b981", sort_order: 2 },
  { name: "Vatandaşlık",  description: "Anayasa ve hukuk temelleri", icon_url: "⚖️", color: "#f59e0b", sort_order: 3 },
];

// ---------- Mapping: module name → course defs ----------
const MODULE_COURSE_MAP: Record<string, CourseDef[]> = {
  "TYT":               TYT_COURSES,
  "AYT Sayısal":       AYT_SAYISAL_COURSES,
  "AYT Sözel":         AYT_SOZEL_COURSES,
  "AYT Eşit Ağırlık":  AYT_EA_COURSES,
  "Genel Yetenek":     KPSS_GY_COURSES,
  "Genel Kültür":      KPSS_GK_COURSES,
};

// ============================================================

export async function seed(knex: Knex): Promise<void> {
  // Aktif tüm modülleri yükle
  const modules = await knex("modules")
    .join("exam_types", "modules.exam_type_id", "exam_types.id")
    .join("exam_groups", "exam_types.exam_group_id", "exam_groups.id")
    .where("exam_groups.is_active", true)
    .where("modules.is_active", true)
    .select(
      "modules.id",
      "modules.name as module_name",
      "modules.exam_type_id",
      "exam_types.name as exam_type_name",
    );

  if (modules.length === 0) {
    throw new Error("Hiç modül bulunamadı — önce 003_exam_structure seed'i çalıştırıldı mı?");
  }

  // Mevcut kursları yükle
  const existingCourses = await knex("courses").select("module_id", "name");
  const existingCourseKeys = new Set(existingCourses.map((c) => `${c.module_id}:${c.name}`));

  const coursesToInsert: object[] = [];

  for (const mod of modules) {
    const courseDefs = MODULE_COURSE_MAP[mod.module_name];
    if (!courseDefs) continue; // bilinmeyen modül adı — atla

    for (const def of courseDefs) {
      const key = `${mod.id}:${def.name}`;
      if (existingCourseKeys.has(key)) continue;

      coursesToInsert.push({
        module_id: mod.id,
        exam_type_id: mod.exam_type_id,
        name: def.name,
        description: def.description,
        icon_url: def.icon_url,
        color: def.color,
        sort_order: def.sort_order,
      });
    }
  }

  if (coursesToInsert.length > 0) {
    await knex("courses").insert(coursesToInsert);
  }
}
