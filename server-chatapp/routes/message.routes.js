import { Router } from "express";
import { sendMessage } from "../controllers/message.controller.js";
import { verifyJWT } from "../../server/middlewares/auth.middleware.js";

const router = Router();

router.post("/send/:id",verifyJWT, sendMessage);

export default router;
