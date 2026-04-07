import type { Request, Response } from "express";
import * as CourseService from "./course.service";

export const getCourses = async (req: Request, res: Response): Promise<void> => {
  const examTypeId = req.query.exam_type_id as string | undefined;
  const courses = await CourseService.getCourses(examTypeId);
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
