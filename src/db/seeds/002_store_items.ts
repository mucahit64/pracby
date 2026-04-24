import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  const existing = await knex("store_items").select("name");
  const existingNames = new Set(existing.map((i) => i.name));

  const items = [
    {
      name: "Seri Dondurma",
      description: "Serini 1 gün boyunca koru. Bir gün çalışmasan bile serin sıfırlanmaz.",
      icon_url: "🧊",
      price_acorn: 20,
      item_type: "streak_freeze",
      duration_hours: 24,
    },
    {
      name: "Sınırsız Enerji",
      description: "8 saat boyunca sınırsız enerji. Yanlış cevaplardan enerji kaybetmezsin.",
      icon_url: "🔋",
      price_acorn: 40,
      item_type: "unlimited_energy",
      duration_hours: 8,
    },
    {
      name: "XP Boost",
      description: "1 saat boyunca 2 kat XP kazan.",
      icon_url: "⚡",
      price_acorn: 30,
      item_type: "xp_boost",
      duration_hours: 1,
    },
    {
      name: "5 Enerji",
      description: "Anında 5 enerji doldur.",
      icon_url: "🔋",
      price_acorn: 15,
      item_type: "energy_refill",
      duration_hours: null,
      metadata: JSON.stringify({ energy_count: 5 }),
    },
    {
      name: "15 Enerji",
      description: "Anında 15 enerji doldur.",
      icon_url: "🔋",
      price_acorn: 35,
      item_type: "energy_refill",
      duration_hours: null,
      metadata: JSON.stringify({ energy_count: 15 }),
    },
    {
      name: "25 Enerji (Tam Doldur)",
      description: "Enerjini tamamen doldur.",
      icon_url: "🔋",
      price_acorn: 50,
      item_type: "energy_refill",
      duration_hours: null,
      metadata: JSON.stringify({ energy_count: 25 }),
    },
  ];

  const toInsert = items.filter((i) => !existingNames.has(i.name));

  if (toInsert.length > 0) {
    await knex("store_items").insert(toInsert);
  }
}
