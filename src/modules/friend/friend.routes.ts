import { Router } from "express";
import { authenticate } from "../../middleware/auth";
import { validate } from "../../middleware/validate";
import { FriendRequestSchema, FriendActionSchema } from "./friend.schema";
import * as FriendController from "./friend.controller";

const router = Router();

router.use(authenticate);

router.get("/", FriendController.listFriends);
router.get("/requests", FriendController.listPendingRequests);
router.post("/request", validate(FriendRequestSchema), FriendController.sendRequest);
router.patch("/:id", validate(FriendActionSchema), FriendController.respondToRequest);
router.delete("/:id", FriendController.removeFriend);

export default router;
