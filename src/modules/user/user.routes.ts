import { Router } from "express";
import { authenticate } from "../../middleware/auth";
import { validate } from "../../middleware/validate";
import { UpdateProfileSchema, DeleteAccountSchema } from "./user.schema";
import * as UserController from "./user.controller";

const router = Router();

router.use(authenticate);

router.get("/me", UserController.getProfile);
router.get("/me/stats", UserController.getStats);
router.get("/me/achievements", UserController.getAchievements);
router.get("/me/streak-history", UserController.getStreakHistory);
router.patch("/me", validate(UpdateProfileSchema), UserController.updateProfile);
router.delete("/me", validate(DeleteAccountSchema), UserController.deleteAccount);
router.get("/me/enrollments", UserController.getEnrollments);
router.post("/me/enrollments", UserController.addEnrollment);
router.delete("/me/enrollments/:examTypeId", UserController.deleteEnrollment);
router.patch("/me/active-exam", UserController.switchActiveExam);

export default router;
