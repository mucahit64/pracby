import type { Request, Response } from "express";
import * as ModuleService from "./module.service";

export const getModules = async (req: Request, res: Response): Promise<void> => {
  const examTypeId = req.query.exam_type_id as string;
  if (!examTypeId) {
    res.status(400).json({ error: "exam_type_id query parameter is required" });
    return;
  }
  const modules = await ModuleService.getModules(examTypeId);
  res.json(modules);
};

export const getModuleById = async (req: Request, res: Response): Promise<void> => {
  const mod = await ModuleService.getModuleById(req.params.id as string);
  res.json(mod);
};
