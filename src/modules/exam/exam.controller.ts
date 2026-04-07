import type { Request, Response } from "express";
import * as ExamService from "./exam.service";

export const getExamGroups = async (_req: Request, res: Response): Promise<void> => {
  const groups = await ExamService.getExamGroups();
  res.json(groups);
};
