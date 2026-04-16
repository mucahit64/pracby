import { Router } from "express";
import { validate } from "../../middleware/validate";
import { RegisterSchema, LoginSchema } from "./auth.schema";
import * as AuthController from "./auth.controller";

const router = Router();

router.post("/register", validate(RegisterSchema), AuthController.register);
router.post("/login", validate(LoginSchema), AuthController.login);
router.get("/check-email", AuthController.checkEmail);
router.get("/check-username", AuthController.checkUsername);

export default router;
