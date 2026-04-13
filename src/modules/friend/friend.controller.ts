import type { Request, Response } from "express";
import * as FriendService from "./friend.service";

export const listFriends = async (req: Request, res: Response): Promise<void> => {
  const result = await FriendService.listFriends(req.user!.userId);
  res.json(result);
};

export const listPendingRequests = async (req: Request, res: Response): Promise<void> => {
  const result = await FriendService.listPendingRequests(req.user!.userId);
  res.json(result);
};

export const sendRequest = async (req: Request, res: Response): Promise<void> => {
  const result = await FriendService.sendRequest(req.user!.userId, req.body.username);
  res.status(201).json(result);
};

export const respondToRequest = async (req: Request, res: Response): Promise<void> => {
  const result = await FriendService.respondToRequest(
    req.user!.userId,
    req.params.id as string,
    req.body.action,
  );
  res.json(result);
};

export const removeFriend = async (req: Request, res: Response): Promise<void> => {
  const result = await FriendService.removeFriend(req.user!.userId, req.params.id as string);
  res.json(result);
};
