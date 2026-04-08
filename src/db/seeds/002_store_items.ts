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
      name: "Sınırsız Can",
      description: "8 saat boyunca sınırsız can. Yanlış cevaplardan can kaybetmezsin.",
      icon_url: "❤️‍🔥",
      price_acorn: 40,
      item_type: "unlimited_lives",
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
      name: "1 Can",
      description: "Anında 1 can doldur.",
      icon_url: "❤️",
      price_acorn: 15,
      item_type: "heart_refill",
      duration_hours: null,
      metadata: JSON.stringify({ heart_count: 1 }),
    },
    {
      name: "3 Can",
      description: "Anında 3 can doldur.",
      icon_url: "❤️",
      price_acorn: 35,
      item_type: "heart_refill",
      duration_hours: null,
      metadata: JSON.stringify({ heart_count: 3 }),
    },
    {
      name: "5 Can (Tam Doldur)",
      description: "Canlarını tamamen doldur.",
      icon_url: "❤️",
      price_acorn: 50,
      item_type: "heart_refill",
      duration_hours: null,
      metadata: JSON.stringify({ heart_count: 5 }),
    },
  ];

  const toInsert = items.filter((i) => !existingNames.has(i.name));

  if (toInsert.length > 0) {
    await knex("store_items").insert(toInsert);
  }
}
