import type { Request, Response, NextFunction } from "express";
import db from "../db/knex";
import { AppError } from "./error";

/**
 * RBAC permission guard — use as route middleware factory.
 * Returns 403 if the authenticated user does not have the required permission.
 *
 * Usage: router.use(authenticate, requirePermission("view_admin_panel"))
 */
export const requirePermission = (permissionName: string) => {
  return async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    if (!req.user) {
      next(new AppError(401, "Authentication required"));
      return;
    }

    const permission = await db("permissions as p")
      .join("role_permissions as rp", "p.id", "rp.permission_id")
      .join("roles as r", "rp.role_id", "r.id")
      .join("users as u", "u.role_id", "r.id")
      .where("u.id", req.user.userId)
      .where("p.name", permissionName)
      .select("p.name")
      .first();

    if (!permission) {
      next(new AppError(403, "Forbidden: insufficient permissions"));
      return;
    }

    next();
  };
};
