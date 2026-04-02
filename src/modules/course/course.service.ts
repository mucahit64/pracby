import db from "../../db/knex";
import { AppError } from "../../middleware/error";

export const getCourses = async () => {
  return db("courses").orderBy("sort_order");
};

export const getCourseById = async (id: string) => {
  const course = await db("courses").where({ id }).first();
  if (!course) throw new AppError(404, "Course not found");
  return course;
};

export const getTopicsByCourse = async (courseId: string) => {
  await getCourseById(courseId);
  return db("topics").where({ course_id: courseId }).orderBy("sort_order");
};
