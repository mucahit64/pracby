import { Router } from "express";
import { authenticate } from "../../middleware/auth";
import { validate } from "../../middleware/validate";
import { PurchaseSchema } from "./store.schema";
import * as StoreController from "./store.controller";

const router = Router();

router.use(authenticate);

router.get("/items", StoreController.getItems);
router.get("/inventory", StoreController.getInventory);
router.get("/effects", StoreController.getActiveEffects);
router.post("/purchase", validate(PurchaseSchema), StoreController.purchase);
router.post("/activate/:itemId", StoreController.activateItem);
router.get("/acorn-packages", StoreController.getAcornPackages);

export default router;
