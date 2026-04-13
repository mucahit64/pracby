import { Router } from "express";
import { authenticate } from "../../middleware/auth";
import { requireAdmin } from "../../middleware/admin";
import { validate } from "../../middleware/validate";
import {
  CreateQuestionSchema,
  UpdateQuestionSchema,
  BulkCreateQuestionsSchema,
  CreateTopicSchema,
  UpdateTopicSchema,
  CreateStepSchema,
  CreateTestSchema,
} from "./admin.schema";
import * as AdminController from "./admin.controller";

const router = Router();

router.use(authenticate, requireAdmin);

// Questions
router.get("/questions", AdminController.listQuestions);
router.post("/questions", validate(CreateQuestionSchema), AdminController.createQuestion);
router.post("/questions/bulk", validate(BulkCreateQuestionsSchema), AdminController.bulkCreateQuestions);
router.patch("/questions/:id", validate(UpdateQuestionSchema), AdminController.updateQuestion);
router.delete("/questions/:id", AdminController.deleteQuestion);

// Topics
router.get("/topics", AdminController.listTopics);
router.post("/topics", validate(CreateTopicSchema), AdminController.createTopic);
router.patch("/topics/:id", validate(UpdateTopicSchema), AdminController.updateTopic);

// Steps
router.get("/steps", AdminController.listSteps);
router.post("/steps", validate(CreateStepSchema), AdminController.createStep);

// Tests
router.get("/tests", AdminController.listTests);
router.post("/tests", validate(CreateTestSchema), AdminController.createTest);

// Dashboard
router.get("/stats", AdminController.getDashboardStats);

export default router;
