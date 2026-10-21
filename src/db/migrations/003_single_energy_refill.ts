import type { Knex } from "knex";

// The store sells a single energy refill that fills energy to the max (25)
// instead of 5 / 15 / 25 packs. The full pack becomes "Enerji Doldur" and the
// smaller packs are deleted (no users yet, so nothing refers to them).
const FULL_PACK = "25 Enerji (Tam Doldur)";
const REFILL = "Enerji Doldur";
const SMALL_PACKS = [
  { name: "5 Enerji", description: "Anında 5 enerji doldur.", price_acorn: 15, energy_count: 5 },
  { name: "15 Enerji", description: "Anında 15 enerji doldur.", price_acorn: 35, energy_count: 15 },
];

export async function up(knex: Knex): Promise<void> {
  await knex("store_items")
    .where({ item_type: "energy_refill" })
    .whereIn("name", SMALL_PACKS.map((p) => p.name))
    .delete();
  await knex("store_items")
    .where({ item_type: "energy_refill", name: FULL_PACK })
    .update({ name: REFILL, description: "Enerjini tamamen doldur." });
}

export async function down(knex: Knex): Promise<void> {
  await knex("store_items")
    .where({ item_type: "energy_refill", name: REFILL })
    .update({ name: FULL_PACK, description: "Enerjini tamamen doldur." });
  await knex("store_items").insert(
    SMALL_PACKS.map(({ energy_count, ...p }) => ({
      ...p,
      icon_url: "🔋",
      item_type: "energy_refill",
      duration_hours: null,
      metadata: JSON.stringify({ energy_count }),
    })),
  );
}
