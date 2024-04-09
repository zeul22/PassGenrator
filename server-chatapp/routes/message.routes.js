import { Router } from "express";
import { sendMessage,getMessage } from "../controllers/message.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/send/:id",verifyJWT, sendMessage);
router.get("/:id",verifyJWT, getMessage);

export default router;
