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

export const updateProfile = async (req: Request, res: Response): Promise<void> => {
  const updated = await UserService.updateProfile(req.user!.userId, req.body);
  res.json(updated);
};
