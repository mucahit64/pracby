import db from "../../db/knex";
import { AppError } from "../../middleware/error";

export const getModules = async (examTypeId: string) => {
  return db("modules")
    .where({ exam_type_id: examTypeId, is_active: true })
    .orderBy("sort_order");
};

export const getModuleById = async (id: string) => {
  const mod = await db("modules").where({ id }).first();
  if (!mod) throw new AppError(404, "Module not found");

  const courses = await db("courses")
    .where({ module_id: id })
    .orderBy("sort_order");

  return { ...mod, courses };
};
