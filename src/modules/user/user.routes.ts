import { Router } from "express";
import { authenticate } from "../../middleware/auth";
import { validate } from "../../middleware/validate";
import { UpdateProfileSchema } from "./user.schema";
import * as UserController from "./user.controller";

const router = Router();

router.use(authenticate);

router.get("/me", UserController.getProfile);
router.get("/me/stats", UserController.getStats);
router.get("/me/achievements", UserController.getAchievements);
router.patch("/me", validate(UpdateProfileSchema), UserController.updateProfile);

export default router;
