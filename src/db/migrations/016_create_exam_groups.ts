import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("exam_groups", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.text("name").notNullable();
    table.text("slug").unique().notNullable();
    table.text("description");
    table.integer("sort_order").defaultTo(0);
    table.boolean("is_active").defaultTo(true);
  });

  await knex("exam_groups").insert([
    { name: "KPSS", slug: "kpss", description: "Kamu Personeli Seçme Sınavı", sort_order: 1 },
    { name: "YKS", slug: "yks", description: "Yükseköğretim Kurumları Sınavı", sort_order: 2, is_active: false },
    { name: "ALES", slug: "ales", description: "Akademik Personel ve Lisansüstü Eğitimi Giriş Sınavı", sort_order: 3, is_active: false },
    { name: "DGS", slug: "dgs", description: "Dikey Geçiş Sınavı", sort_order: 4, is_active: false },
  ]);
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("exam_groups");
}
