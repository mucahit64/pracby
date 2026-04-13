import type { Request, Response } from "express";
import * as AdminService from "./admin.service";

// ── Questions ──────────────────────────────────────────

export const listQuestions = async (req: Request, res: Response): Promise<void> => {
  const result = await AdminService.listQuestions({
    topic_id: req.query.topic_id as string | undefined,
    step_id: req.query.step_id as string | undefined,
    test_id: req.query.test_id as string | undefined,
    question_type: req.query.question_type as string | undefined,
    status: req.query.status as string | undefined,
    page: req.query.page ? Number(req.query.page) : undefined,
    limit: req.query.limit ? Number(req.query.limit) : undefined,
  });
  res.json(result);
};

export const createQuestion = async (req: Request, res: Response): Promise<void> => {
  const result = await AdminService.createQuestion(req.body, req.user!.userId);
  res.status(201).json(result);
};

export const updateQuestion = async (req: Request, res: Response): Promise<void> => {
  const result = await AdminService.updateQuestion(req.params.id as string, req.body);
  res.json(result);
};

export const deleteQuestion = async (req: Request, res: Response): Promise<void> => {
  const result = await AdminService.deleteQuestion(req.params.id as string);
  res.json(result);
};

export const bulkCreateQuestions = async (req: Request, res: Response): Promise<void> => {
  const result = await AdminService.bulkCreateQuestions(req.body, req.user!.userId);
  res.status(201).json(result);
};

// ── Topics ─────────────────────────────────────────────

export const listTopics = async (req: Request, res: Response): Promise<void> => {
  const result = await AdminService.listTopics(req.query.course_id as string | undefined);
  res.json(result);
};

export const createTopic = async (req: Request, res: Response): Promise<void> => {
  const result = await AdminService.createTopic(req.body);
  res.status(201).json(result);
};

export const updateTopic = async (req: Request, res: Response): Promise<void> => {
  const result = await AdminService.updateTopic(req.params.id as string, req.body);
  res.json(result);
};

// ── Steps ──────────────────────────────────────────────

export const listSteps = async (req: Request, res: Response): Promise<void> => {
  const result = await AdminService.listSteps(req.query.topic_id as string | undefined);
  res.json(result);
};

export const createStep = async (req: Request, res: Response): Promise<void> => {
  const result = await AdminService.createStep(req.body);
  res.status(201).json(result);
};

// ── Tests ──────────────────────────────────────────────

export const listTests = async (req: Request, res: Response): Promise<void> => {
  const result = await AdminService.listTests(req.query.step_id as string | undefined);
  res.json(result);
};

export const createTest = async (req: Request, res: Response): Promise<void> => {
  const result = await AdminService.createTest(req.body);
  res.status(201).json(result);
};

// ── Stats ──────────────────────────────────────────────

export const getDashboardStats = async (_req: Request, res: Response): Promise<void> => {
  const result = await AdminService.getDashboardStats();
  res.json(result);
};
