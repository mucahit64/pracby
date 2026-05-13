import type { Request, Response } from "express";
import * as UserService from "./user.service";

export const getProfile = async (req: Request, res: Response): Promise<void> => {
  const user = await UserService.getProfile(req.user!.userId);
  res.json(user);
};

export const getStats = async (req: Request, res: Response): Promise<void> => {
  const stats = await UserService.getStats(req.user!.userId);
  res.json(stats);
};

export const getAchievements = async (req: Request, res: Response): Promise<void> => {
  const achievements = await UserService.getAchievements(req.user!.userId);
  res.json(achievements);
};

export const getStreakHistory = async (req: Request, res: Response): Promise<void> => {
  const history = await UserService.getStreakHistory(req.user!.userId);
  res.json(history);
};

export const updateProfile = async (req: Request, res: Response): Promise<void> => {
  const updated = await UserService.updateProfile(req.user!.userId, req.body);
  res.json(updated);
};

export const getEnrollments = async (req: Request, res: Response): Promise<void> => {
  const enrollments = await UserService.getEnrollments(req.user!.userId);
  res.json(enrollments);
};

export const addEnrollment = async (req: Request, res: Response): Promise<void> => {
  const enrollment = await UserService.addEnrollment(req.user!.userId, req.body.exam_type_id);
  res.status(201).json(enrollment);
};

export const switchActiveExam = async (req: Request, res: Response): Promise<void> => {
  const updated = await UserService.switchActiveExam(req.user!.userId, req.body.exam_type_id);
  res.json(updated);
};

export const deleteEnrollment = async (req: Request, res: Response): Promise<void> => {
  const result = await UserService.deleteEnrollment(req.user!.userId, req.params.examTypeId as string);
  res.json(result);
};
