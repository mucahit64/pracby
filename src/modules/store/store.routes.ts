import { Router } from "express";
import { authenticate } from "../../middleware/auth";
import { optionalAuth } from "../../middleware/optionalAuth";
import { validate } from "../../middleware/validate";
import { PurchaseSchema } from "./store.schema";
import * as StoreController from "./store.controller";

const router = Router();

// Public endpoints (guests can view items)
router.get("/items", optionalAuth, StoreController.getItems);

// All other routes require authentication
router.use(authenticate);

router.get("/inventory", StoreController.getInventory);
router.get("/effects", StoreController.getActiveEffects);
router.post("/purchase", validate(PurchaseSchema), StoreController.purchase);
router.post("/activate/:itemId", StoreController.activateItem);
router.get("/acorn-packages", StoreController.getAcornPackages);

export default router;
