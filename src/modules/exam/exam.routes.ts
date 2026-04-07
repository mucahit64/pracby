import { Router } from "express";
import * as ExamController from "./exam.controller";

const router = Router();

router.get("/", ExamController.getExamGroups);

export default router;
