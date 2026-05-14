import { Router } from "express";
import { authenticate } from "../../middleware/auth";
import { validate } from "../../middleware/validate";
import { StartQuizSchema, AnswerSchema, BulkFinishSchema, ReportQuestionSchema } from "./quiz.schema";
import * as QuizController from "./quiz.controller";

const router = Router();

// Public guest endpoint (no auth required)
router.get("/guest-start", QuizController.guestStartSession);

router.use(authenticate);

router.post("/start", validate(StartQuizSchema), QuizController.startSession);
router.post("/:sessionId/answer", validate(AnswerSchema), QuizController.submitAnswer);
router.post("/:sessionId/finish", QuizController.finishSession);
router.post("/:sessionId/finish-bulk", validate(BulkFinishSchema), QuizController.finishSessionBulk);
router.post("/reward/:stepId/claim", QuizController.claimReward);
router.post("/report-question", validate(ReportQuestionSchema), QuizController.reportQuestion);

export default router;
