import { Router } from "express";
import authRoutes from "./auth/auth.routes";
import courseRoutes from "./course/course.routes";
import quizRoutes from "./quiz/quiz.routes";
import userRoutes from "./user/user.routes";
import leaderboardRoutes from "./leaderboard/leaderboard.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/courses", courseRoutes);
router.use("/quiz", quizRoutes);
router.use("/users", userRoutes);
router.use("/leaderboard", leaderboardRoutes);

export default router;
