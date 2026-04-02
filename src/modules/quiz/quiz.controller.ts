import type { Request, Response } from "express";
import * as QuizService from "./quiz.service";

export const startSession = async (req: Request, res: Response): Promise<void> => {
  const result = await QuizService.startSession(req.user!.userId, req.body);
  res.status(201).json(result);
};

export const submitAnswer = async (req: Request, res: Response): Promise<void> => {
  const result = await QuizService.submitAnswer(
    req.user!.userId,
    req.params.sessionId as string,
    req.body,
  );
  res.json(result);
};

export const finishSession = async (req: Request, res: Response): Promise<void> => {
  const result = await QuizService.finishSession(req.user!.userId, req.params.sessionId as string);
  res.json(result);
};
