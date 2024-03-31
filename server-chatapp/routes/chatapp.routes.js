import { Router } from "express";
import {
  loginUser,
  logoutUser,
  signup,
} from "../controllers/auth.controller.js";

const router = Router();

router.get("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/signup", signup);

export default router;
