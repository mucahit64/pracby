import { Router } from "express";
import { authenticate } from "../../middleware/auth";
import * as ModuleController from "./module.controller";

const router = Router();

router.use(authenticate);

router.get("/", ModuleController.getModules);
router.get("/:id", ModuleController.getModuleById);

export default router;
