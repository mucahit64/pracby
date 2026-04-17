import type { Knex } from "knex";

// ============================================================
// SEED 003 — Exam Structure
// ============================================================
// Hiyerarşi: exam_groups → exam_types → modules (= oturumlar)
//
// Sınavlar   : YKS, KPSS  (exam_groups)
// Oturumlar  :
//   YKS      → TYT | AYT Sayısal | AYT Sözel | AYT Eşit Ağırlık (modules)
//   KPSS     → Genel Yetenek | Genel Kültür  (modules, her exam_type için)
//
// Idempotent: tüm insertler öncesi var-olup-olmadığı kontrol edilir.
// ============================================================

// ---------- Helper Types ----------
interface ExamGroup {
  id: string;
  slug: string;
  name: string;
}

interface ExamType {
  id: string;
  exam_group_id: string;
  slug: string;
  name: string;
}

// ---------- Constant Data ----------

const YKS_EXAM_TYPE = {
  name: "YKS",
  slug: "yks",
  description: "Yükseköğretim Kurumları Sınavı",
  sort_order: 1,
  is_active: true,
};

const YKS_MODULES = [
  { name: "TYT", description: "Temel Yeterlilik Testi — 1. Oturum", icon_url: "📗", sort_order: 1 },
  { name: "AYT Sayısal", description: "Alan Yeterlilik Testi Sayısal — 2. Oturum", icon_url: "🔢", sort_order: 2 },
  { name: "AYT Sözel", description: "Alan Yeterlilik Testi Sözel — 2. Oturum", icon_url: "📖", sort_order: 3 },
  { name: "AYT Eşit Ağırlık", description: "Alan Yeterlilik Testi Eşit Ağırlık — 2. Oturum", icon_url: "⚖️", sort_order: 4 },
];

const KPSS_MODULES = [
  { name: "Genel Yetenek", description: "Genel Yetenek Oturumu", icon_url: "🧠", sort_order: 1 },
  { name: "Genel Kültür", description: "Genel Kültür Oturumu", icon_url: "📚", sort_order: 2 },
];

// ============================================================

export async function seed(knex: Knex): Promise<void> {
  // ----------------------------------------------------------
  // 1. YKS exam_group'unu aktif et
  // ----------------------------------------------------------
  await knex("exam_groups").where({ slug: "yks" }).update({ is_active: true });

  const [yksGroup, kpssGroup]: [ExamGroup | undefined, ExamGroup | undefined] = await Promise.all([
    knex("exam_groups").where({ slug: "yks" }).first(),
    knex("exam_groups").where({ slug: "kpss" }).first(),
  ]);

  if (!yksGroup) throw new Error("exam_group 'yks' bulunamadı — migrasyon çalıştırıldı mı?");
  if (!kpssGroup) throw new Error("exam_group 'kpss' bulunamadı — migrasyon çalıştırıldı mı?");

  // ----------------------------------------------------------
  // 2. YKS exam_type ekle (idempotent)
  // ----------------------------------------------------------
  const existingYksType = await knex("exam_types")
    .where({ exam_group_id: yksGroup.id, slug: YKS_EXAM_TYPE.slug })
    .first();

  if (!existingYksType) {
    await knex("exam_types").insert({
      exam_group_id: yksGroup.id,
      ...YKS_EXAM_TYPE,
    });
  }

  // ----------------------------------------------------------
  // 3. Tüm aktif exam_type'ları getir
  // ----------------------------------------------------------
  const allExamTypes: ExamType[] = await knex("exam_types")
    .join("exam_groups", "exam_types.exam_group_id", "exam_groups.id")
    .where("exam_groups.is_active", true)
    .select("exam_types.*");

  const yksTypes = allExamTypes.filter((et) => et.exam_group_id === yksGroup.id);
  const kpssTypes = allExamTypes.filter((et) => et.exam_group_id === kpssGroup.id);

  // ----------------------------------------------------------
  // 4. Mevcut modülleri yükle (toplu karşılaştırma için)
  // ----------------------------------------------------------
  const existingModules = await knex("modules").select("exam_type_id", "name");
  const existingModuleKeys = new Set(existingModules.map((m) => `${m.exam_type_id}:${m.name}`));

  const modulesToInsert: object[] = [];

  // --- YKS modülleri (TYT, AYT Sayısal, AYT Sözel, AYT EA) ---
  for (const examType of yksTypes) {
    for (const mod of YKS_MODULES) {
      const key = `${examType.id}:${mod.name}`;
      if (existingModuleKeys.has(key)) continue;
      modulesToInsert.push({
        exam_type_id: examType.id,
        name: mod.name,
        description: `${examType.name} — ${mod.description}`,
        icon_url: mod.icon_url,
        sort_order: mod.sort_order,
        is_active: true,
      });
    }
  }

  // --- KPSS modülleri (Genel Yetenek, Genel Kültür) ---
  // Her KPSS exam_type'ı (Lisans, Önlisans, Ortaöğretim) için ayrı modüller
  for (const examType of kpssTypes) {
    for (const mod of KPSS_MODULES) {
      const key = `${examType.id}:${mod.name}`;
      if (existingModuleKeys.has(key)) continue;
      modulesToInsert.push({
        exam_type_id: examType.id,
        name: mod.name,
        description: `${examType.name} — ${mod.description}`,
        icon_url: mod.icon_url,
        sort_order: mod.sort_order,
        is_active: true,
      });
    }
  }

  if (modulesToInsert.length > 0) {
    await knex("modules").insert(modulesToInsert);
  }
}
