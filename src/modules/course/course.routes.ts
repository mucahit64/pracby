import { Router } from "express";
import { optionalAuth } from "../../middleware/optionalAuth";
import * as CourseController from "./course.controller";

const router = Router();

router.get("/", optionalAuth, CourseController.getCourses);
router.get("/:id", optionalAuth, CourseController.getCourseById);
router.get("/:id/topics", optionalAuth, CourseController.getTopicsByCourse);
router.get("/:id/full", optionalAuth, CourseController.getCourseFull);

export default router;
