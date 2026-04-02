import type { Request, Response, NextFunction } from "express";
import { z } from "zod/v4";

export const validate =
  (schema: z.ZodSchema) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({ errors: z.treeifyError(result.error) });
      return;
    }
    req.body = result.data;
    next();
  };
