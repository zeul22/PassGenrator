import { Router } from "express";
import {
  sendMessage,
  getMessage,
  getUsers,
} from "../controllers/message.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/users", verifyJWT, getUsers);
router.post("/send/:id", verifyJWT, sendMessage);
router.get("/:id", verifyJWT, getMessage);

export default router;
