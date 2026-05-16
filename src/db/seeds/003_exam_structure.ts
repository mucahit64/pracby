import type { Knex } from "knex";

// ============================================================
// SEED 003 — Exam Structure (Oturumlar / Modüller)
// ============================================================
// Hiyerarşi: exam_groups → exam_types → modules (= oturumlar)
//
// Migration (000_initial.ts) ile Exam Groups ve Types kuruldu.
// Bu seed dosyası sadece Modules (Oturumlar) tablosunu doldurur.
// ============================================================

// ---------- Constant Data (Slug'lara Göre Eşleşme) ----------

const MODULES_MAP: Record<string, any[]> = {
  // --- YKS Modülleri ---
  "tyt": [
    { name: "TYT", description: "Temel Yeterlilik Testi", icon_url: "📗", sort_order: 1 }
  ],
  "ayt": [
    { name: "AYT Sayısal", description: "Sayısal Oturumu", icon_url: "🔢", sort_order: 1 },
    { name: "AYT Sözel", description: "Sözel Oturumu", icon_url: "📖", sort_order: 2 },
    { name: "AYT Eşit Ağırlık", description: "Eşit Ağırlık Oturumu", icon_url: "⚖️", sort_order: 3 },
  ],
  "ydt": [
    { name: "YDT", description: "Yabancı Dil Testi", icon_url: "🇬🇧", sort_order: 1 }
  ],
  
  // --- KPSS Modülleri (Tümü için Genel Yetenek & Genel Kültür) ---
  "lisans": [
    { name: "Genel Yetenek", description: "Genel Yetenek Oturumu", icon_url: "🧠", sort_order: 1 },
    { name: "Genel Kültür", description: "Genel Kültür Oturumu", icon_url: "📚", sort_order: 2 },
  ],
  "onlisans": [
    { name: "Genel Yetenek", description: "Genel Yetenek Oturumu", icon_url: "🧠", sort_order: 1 },
    { name: "Genel Kültür", description: "Genel Kültür Oturumu", icon_url: "📚", sort_order: 2 },
  ],
  "ortaogretim": [
    { name: "Genel Yetenek", description: "Genel Yetenek Oturumu", icon_url: "🧠", sort_order: 1 },
    { name: "Genel Kültür", description: "Genel Kültür Oturumu", icon_url: "📚", sort_order: 2 },
  ]
};

// ============================================================

export async function seed(knex: Knex): Promise<void> {
  // 1. Grupları aktifleştir (Migration'da YKS is_active: false gelmişti, kullanıma açıyoruz)
  await knex("exam_groups").whereIn("slug", ["yks", "kpss"]).update({ is_active: true });

  // 2. Veritabanındaki tüm exam_type'ları getir
  const examTypes = await knex("exam_types").select("id", "slug", "name");

  // 3. Mevcut modülleri yükle (idempotent kontrol için, aynı kaydı 2 kez girmemek adına)
  const existingModules = await knex("modules").select("exam_type_id", "name");
  const existingModuleKeys = new Set(existingModules.map((m) => `${m.exam_type_id}:${m.name}`));

  const modulesToInsert: object[] = [];

  // 4. Modülleri Sınav Türlerine (slug'a) göre eşleştir ve array'e ekle
  for (const examType of examTypes) {
    const modules = MODULES_MAP[examType.slug];
    
    // Eğer bu sınav türü için bir modül listesi tanımlanmamışsa es geç (örn: DGS, ALES)
    if (!modules) continue; 

    for (const mod of modules) {
      const key = `${examType.id}:${mod.name}`;
      if (existingModuleKeys.has(key)) continue;

      modulesToInsert.push({
        exam_type_id: examType.id,
        name: mod.name,
        description: mod.description,
        icon_url: mod.icon_url,
        sort_order: mod.sort_order,
        is_active: true,
      });
    }
  }

  // 5. Hazırlanan listeyi veritabanına tek seferde (bulk) yaz
  if (modulesToInsert.length > 0) {
    await knex("modules").insert(modulesToInsert);
  }
}