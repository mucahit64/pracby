import type { Request, Response } from "express";
import * as AuthService from "./auth.service";

export const register = async (req: Request, res: Response): Promise<void> => {
  const result = await AuthService.register(req.body);
  res.status(201).json(result);
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const result = await AuthService.login(req.body);
  res.json(result);
};

export const checkEmail = async (req: Request, res: Response): Promise<void> => {
  const email = String(req.query.email ?? "");
  if (!email) { res.status(400).json({ error: "email required" }); return; }
  const result = await AuthService.checkEmail(email);
  res.json(result);
};

export const checkUsername = async (req: Request, res: Response): Promise<void> => {
  const username = String(req.query.username ?? "");
  if (!username) { res.status(400).json({ error: "username required" }); return; }
  const result = await AuthService.checkUsername(username);
  res.json(result);
};

export const mergeGuestProgress = async (req: Request, res: Response): Promise<void> => {
  const result = await AuthService.mergeGuestProgress(
    req.user!.userId,
    req.body.quiz_results,
    req.body.claimed_rewards,
    req.body.earned_acorns,
  );
  res.json(result);
};
