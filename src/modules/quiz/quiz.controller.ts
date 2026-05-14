import type { Request, Response } from "express";
import * as QuizService from "./quiz.service";
import type { BulkFinishInput } from "./quiz.schema";

export const startSession = async (req: Request, res: Response): Promise<void> => {
  const result = await QuizService.startSession(req.user!.userId, req.body);
  res.status(201).json(result);
};

export const guestStartSession = async (req: Request, res: Response): Promise<void> => {
  const topicId = req.query.topicId as string;
  const stepId = req.query.stepId as string | undefined;
  const testId = req.query.testId as string | undefined;
  const sessionType = (req.query.sessionType as string) || "lesson";

  if (!topicId) {
    res.status(400).json({ error: "topicId is required" });
    return;
  }

  const result = await QuizService.guestStartSession({ topicId, stepId, testId, sessionType });
  res.json(result);
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
  const result = await QuizService.finishSession(
    req.user!.userId,
    req.params.sessionId as string,
    Boolean(req.body?.skip_rewards),
  );
  res.json(result);
};

export const claimReward = async (req: Request, res: Response): Promise<void> => {
  const result = await QuizService.claimReward(req.user!.userId, req.params.stepId as string);
  res.json(result);
};

export const finishSessionBulk = async (req: Request, res: Response): Promise<void> => {
  const result = await QuizService.finishSessionWithAnswers(
    req.user!.userId,
    req.params.sessionId as string,
    req.body as BulkFinishInput,
  );
  res.json(result);
};

export const reportQuestion = async (req: Request, res: Response): Promise<void> => {
  const result = await QuizService.reportQuestion(req.user!.userId, req.body);
  res.status(201).json(result);
};
