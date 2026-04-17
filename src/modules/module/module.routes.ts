import { Router } from "express";
import { optionalAuth } from "../../middleware/optionalAuth";
import * as ModuleController from "./module.controller";

const router = Router();

router.get("/", optionalAuth, ModuleController.getModules);
router.get("/:id", optionalAuth, ModuleController.getModuleById);

export default router;
