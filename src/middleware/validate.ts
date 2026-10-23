import type { Request, Response, NextFunction } from "express";
import { z } from "zod";

// Clients show these messages under the form fields, so Zod's defaults come in
// Turkish; the schemas give clearer messages for the fields users type into.
z.config(z.locales.tr());

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
