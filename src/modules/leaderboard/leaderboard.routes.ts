import { Router } from "express";
import { authenticate } from "../../middleware/auth";
import * as LeaderboardController from "./leaderboard.controller";

const router = Router();

router.use(authenticate);

router.get("/", LeaderboardController.getLeaderboard);

export default router;
