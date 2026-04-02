import { Router } from "express";
import { authenticate } from "../../middleware/auth";
import { validate } from "../../middleware/validate";
import { StartQuizSchema, AnswerSchema } from "./quiz.schema";
import * as QuizController from "./quiz.controller";

const router = Router();

router.use(authenticate);

router.post("/start", validate(StartQuizSchema), QuizController.startSession);
router.post("/:sessionId/answer", validate(AnswerSchema), QuizController.submitAnswer);
router.post("/:sessionId/finish", QuizController.finishSession);

export default router;
