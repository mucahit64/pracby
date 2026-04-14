import type { Request, Response } from "express";
import { z } from "zod";
import * as LeaderboardService from "./leaderboard.service";
import { AppError } from "../../middleware/error";

const QuerySchema = z.object({
  league: z.enum(["bronze", "silver", "gold", "diamond"]).default("bronze"),
});

export const getLeaderboard = async (req: Request, res: Response): Promise<void> => {
  const result = QuerySchema.safeParse(req.query);
  if (!result.success) throw new AppError(400, "Invalid league value");

  const data = await LeaderboardService.getLeaderboard(result.data.league);
  res.json(data);
};
