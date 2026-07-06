import db from "../../db/knex";

export const getExamGroups = async () => {
  // Return ALL groups (active and inactive) so the UI can render inactive ones
  // (e.g. YKS) as "Çok Yakında" / disabled. Only active groups expose their
  // (active) exam_types — inactive groups come back with an empty list, so
  // they can never be enrolled in.
  const groups = await db("exam_groups").orderBy("sort_order");

  const types = await db("exam_types")
    .join("exam_groups", "exam_types.exam_group_id", "exam_groups.id")
    .where("exam_groups.is_active", true)
    .where("exam_types.is_active", true)
    .select("exam_types.*")
    .orderBy("exam_types.sort_order");

  return groups.map((group) => ({
    ...group,
    exam_types: types.filter((t) => t.exam_group_id === group.id),
  }));
};

export const getExamTypeById = async (id: string) => {
  return db("exam_types as et")
    .join("exam_groups as eg", "et.exam_group_id", "eg.id")
    .where("et.id", id)
    .select("et.*", "eg.name as group_name", "eg.slug as group_slug")
    .first();
};
