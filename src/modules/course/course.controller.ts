import type { Request, Response } from "express";
import * as CourseService from "./course.service";

export const getCourses = async (_req: Request, res: Response): Promise<void> => {
  const courses = await CourseService.getCourses();
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
