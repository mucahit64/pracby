import { Router } from "express";
import authRoutes from "./auth/auth.routes";
import courseRoutes from "./course/course.routes";
import examRoutes from "./exam/exam.routes";
import moduleRoutes from "./module/module.routes";
import quizRoutes from "./quiz/quiz.routes";
import userRoutes from "./user/user.routes";
import leaderboardRoutes from "./leaderboard/leaderboard.routes";
import storeRoutes from "./store/store.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/courses", courseRoutes);
router.use("/exam-groups", examRoutes);
router.use("/modules", moduleRoutes);
router.use("/quiz", quizRoutes);
router.use("/users", userRoutes);
router.use("/leaderboard", leaderboardRoutes);
router.use("/store", storeRoutes);

export default router;
