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
