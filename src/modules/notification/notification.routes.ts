import { Router } from "express";
import { authenticate } from "../../middleware/auth";
import * as NotificationController from "./notification.controller";

const router = Router();

router.use(authenticate);

router.get("/", NotificationController.getNotifications);
router.get("/unread-count", NotificationController.getUnreadCount);
router.patch("/:id/read", NotificationController.markAsRead);
router.post("/read-all", NotificationController.markAllAsRead);

export default router;
