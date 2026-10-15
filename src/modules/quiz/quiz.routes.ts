import { Router } from "express";
import rateLimit from "express-rate-limit";
import { authenticate } from "../../middleware/auth";
import { validate } from "../../middleware/validate";
import {
  StartQuizSchema,
  AnswerSchema,
  BulkFinishSchema,
  ReportQuestionSchema,
  GuestReportQuestionSchema,
} from "./quiz.schema";
import * as QuizController from "./quiz.controller";

const router = Router();

const guestReportLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 1 day
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many reports, please try again later" },
});

// Public guest endpoint (no auth required)
router.get("/guest-start", QuizController.guestStartSession);
router.post(
  "/guest-report-question",
  guestReportLimiter,
  validate(GuestReportQuestionSchema),
  QuizController.guestReportQuestion,
);

router.use(authenticate);

router.post("/start", validate(StartQuizSchema), QuizController.startSession);
router.post("/:sessionId/answer", validate(AnswerSchema), QuizController.submitAnswer);
router.post("/:sessionId/finish", QuizController.finishSession);
router.post("/:sessionId/finish-bulk", validate(BulkFinishSchema), QuizController.finishSessionBulk);
router.post("/reward/:stepId/claim", QuizController.claimReward);
router.post("/report-question", validate(ReportQuestionSchema), QuizController.reportQuestion);

export default router;
