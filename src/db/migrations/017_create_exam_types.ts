import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("exam_types", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("exam_group_id").references("id").inTable("exam_groups").onDelete("CASCADE").notNullable();
    table.text("name").notNullable();
    table.text("slug").notNullable();
    table.text("description");
    table.integer("sort_order").defaultTo(0);
    table.boolean("is_active").defaultTo(true);
    table.unique(["exam_group_id", "slug"]);
  });

  await knex.raw("CREATE INDEX idx_exam_types_group ON exam_types(exam_group_id)");

  const kpss = await knex("exam_groups").where({ slug: "kpss" }).first();
  if (kpss) {
    await knex("exam_types").insert([
      { exam_group_id: kpss.id, name: "KPSS Lisans", slug: "lisans", description: "4 yıllık lisans mezunları için KPSS", sort_order: 1 },
      { exam_group_id: kpss.id, name: "KPSS Önlisans", slug: "onlisans", description: "2 yıllık önlisans mezunları için KPSS", sort_order: 2 },
      { exam_group_id: kpss.id, name: "KPSS Ortaöğretim", slug: "ortaogretim", description: "Ortaöğretim (lise) mezunları için KPSS", sort_order: 3 },
    ]);
  }
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("exam_types");
}
