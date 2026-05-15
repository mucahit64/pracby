import { Router } from "express";
import { authenticate } from "../../middleware/auth";
import { requirePermission } from "../../middleware/admin";
import { validate } from "../../middleware/validate";
import {
  CreateQuestionSchema,
  UpdateQuestionSchema,
  BulkCreateQuestionsSchema,
  CreateTopicSchema,
  UpdateTopicSchema,
  CreateStepSchema,
  CreateTestSchema,
  UpdateReportSchema,
  UpdateUserAdminSchema,
  UpdateUserRoleSchema,
} from "./admin.schema";
import * as AdminController from "./admin.controller";

const router = Router();

router.use(authenticate, requirePermission("view_admin_panel"));

// Questions
router.get("/questions", AdminController.listQuestions);
router.get("/questions/:id", AdminController.getQuestion);
router.post("/questions", validate(CreateQuestionSchema), AdminController.createQuestion);
router.post("/questions/bulk", validate(BulkCreateQuestionsSchema), AdminController.bulkCreateQuestions);
router.patch("/questions/:id", validate(UpdateQuestionSchema), AdminController.updateQuestion);
router.delete("/questions/:id", AdminController.deleteQuestion);

// Exam Types & Courses
router.get("/exam-types", AdminController.listExamTypes);
router.get("/courses", AdminController.listCourses);

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

// Reports
router.get("/reports", AdminController.listReports);
router.get("/reports/stats", AdminController.getReportStats);
router.patch("/reports/:id", validate(UpdateReportSchema), AdminController.updateReport);

// Users
router.get("/users", AdminController.listUsers);
router.get("/users/:id", AdminController.getUserDetail);
router.patch("/users/:id", validate(UpdateUserAdminSchema), AdminController.updateUser);
router.delete("/users/:id", AdminController.deleteUser);
router.patch("/users/:id/role", requirePermission("manage_users"), validate(UpdateUserRoleSchema), AdminController.updateUserRole);

// Roles
router.get("/roles", AdminController.listRoles);

export default router;
