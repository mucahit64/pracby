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
  CreateCourseSchema,
  UpdateCourseSchema,
  CreateModuleSchema,
  UpdateModuleSchema,
  CreateUserAdminSchema,
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
router.get("/exam-groups", AdminController.listExamGroups);
router.post("/exam-groups", requirePermission("manage_exams"), AdminController.createExamGroup);
router.patch("/exam-groups/:id", requirePermission("manage_exams"), AdminController.updateExamGroup);
router.delete("/exam-groups/:id", requirePermission("manage_exams"), AdminController.deleteExamGroup);
router.post("/exam-types", requirePermission("manage_exams"), AdminController.createExamType);
router.patch("/exam-types/:id", requirePermission("manage_exams"), AdminController.updateExamType);
router.delete("/exam-types/:id", requirePermission("manage_exams"), AdminController.deleteExamType);
router.get("/courses", AdminController.listCourses);
router.post("/courses", requirePermission("manage_exams"), validate(CreateCourseSchema), AdminController.createCourse);
router.patch("/courses/:id", requirePermission("manage_exams"), validate(UpdateCourseSchema), AdminController.updateCourse);
router.delete("/courses/:id", requirePermission("manage_exams"), AdminController.deleteCourse);

// Modules
router.get("/modules", AdminController.listModules);
router.post("/modules", requirePermission("manage_exams"), validate(CreateModuleSchema), AdminController.createModule);
router.patch("/modules/:id", requirePermission("manage_exams"), validate(UpdateModuleSchema), AdminController.updateModule);
router.delete("/modules/:id", requirePermission("manage_exams"), AdminController.deleteModule);

// Topics
router.get("/topics", AdminController.listTopics);
router.post("/topics", validate(CreateTopicSchema), AdminController.createTopic);
router.patch("/topics/:id", validate(UpdateTopicSchema), AdminController.updateTopic);
router.delete("/topics/:id", requirePermission("manage_exams"), AdminController.deleteTopic);

// Steps
router.get("/steps", AdminController.listSteps);
router.post("/steps", validate(CreateStepSchema), AdminController.createStep);
router.delete("/steps/:id", requirePermission("manage_exams"), AdminController.deleteStep);

// Tests
router.get("/tests", AdminController.listTests);
router.post("/tests", validate(CreateTestSchema), AdminController.createTest);
router.delete("/tests/:id", requirePermission("manage_exams"), AdminController.deleteTest);

// Dashboard
router.get("/stats", AdminController.getDashboardStats);

// Approval Workflow (admin only)
router.get("/pending", requirePermission("manage_exams"), AdminController.getPendingContent);
router.post("/questions/:id/approve", requirePermission("manage_exams"), AdminController.approveQuestion);
router.post("/questions/:id/reject", requirePermission("manage_exams"), AdminController.rejectQuestion);
router.post("/topics/:id/approve", requirePermission("manage_exams"), AdminController.approveTopic);
router.post("/topics/:id/reject", requirePermission("manage_exams"), AdminController.rejectTopic);

// Reports
router.get("/reports", AdminController.listReports);
router.get("/reports/stats", AdminController.getReportStats);
router.patch("/reports/:id", validate(UpdateReportSchema), AdminController.updateReport);

// Users
router.get("/users", AdminController.listUsers);
router.post("/users", requirePermission("manage_users"), validate(CreateUserAdminSchema), AdminController.createUser);
router.get("/users/:id", AdminController.getUserDetail);
router.patch("/users/:id", validate(UpdateUserAdminSchema), AdminController.updateUser);
router.delete("/users/:id", AdminController.deleteUser);
router.patch("/users/:id/role", requirePermission("manage_users"), validate(UpdateUserRoleSchema), AdminController.updateUserRole);

// Roles
router.get("/roles", AdminController.listRoles);

export default router;
