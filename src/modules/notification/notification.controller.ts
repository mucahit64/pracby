import type { Request, Response } from "express";
import * as NotificationService from "./notification.service";

export const getNotifications = async (req: Request, res: Response): Promise<void> => {
  const page = req.query.page ? Number(req.query.page) : 1;
  const limit = req.query.limit ? Number(req.query.limit) : 20;
  const result = await NotificationService.getNotifications(req.user!.userId, page, limit);
  res.json(result);
};

export const markAsRead = async (req: Request, res: Response): Promise<void> => {
  const result = await NotificationService.markAsRead(req.user!.userId, req.params.id as string);
  res.json(result);
};

export const markAllAsRead = async (req: Request, res: Response): Promise<void> => {
  const result = await NotificationService.markAllAsRead(req.user!.userId);
  res.json(result);
};

export const getUnreadCount = async (req: Request, res: Response): Promise<void> => {
  const result = await NotificationService.getUnreadCount(req.user!.userId);
  res.json(result);
};
