import { Router } from "express";
import { authenticate } from "../../middleware/auth";
import * as CourseController from "./course.controller";

const router = Router();

router.use(authenticate);

router.get("/", CourseController.getCourses);
router.get("/:id", CourseController.getCourseById);
router.get("/:id/topics", CourseController.getTopicsByCourse);
router.get("/:id/full", CourseController.getCourseFull);

export default router;
