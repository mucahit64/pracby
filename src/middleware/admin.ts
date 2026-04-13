import type { Request, Response, NextFunction } from "express";
import db from "../db/knex";
import { AppError } from "./error";

export const requireAdmin = async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
  if (!req.user) {
    next(new AppError(401, "Authentication required"));
    return;
  }

  const user = await db("users").where({ id: req.user.userId }).select("role").first();
  if (!user || user.role !== "admin") {
    next(new AppError(403, "Admin access required"));
    return;
  }

  next();
};
