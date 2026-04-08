import type { Request, Response } from "express";
import * as CourseService from "./course.service";

export const getCourses = async (req: Request, res: Response): Promise<void> => {
  const examTypeId = req.query.exam_type_id as string | undefined;
  const moduleId = req.query.module_id as string | undefined;
  const courses = await CourseService.getCourses(examTypeId, moduleId);
  res.json(courses);
};

export const getCourseById = async (req: Request, res: Response): Promise<void> => {
  const course = await CourseService.getCourseById(req.params.id as string);
  res.json(course);
};

export const getTopicsByCourse = async (req: Request, res: Response): Promise<void> => {
  const topics = await CourseService.getTopicsByCourse(req.params.id as string);
  res.json(topics);
};

export const getCourseFull = async (req: Request, res: Response): Promise<void> => {
  const result = await CourseService.getCourseFull(
    req.params.id as string,
    req.user?.userId,
  );
  res.json(result);
};
