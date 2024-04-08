import { Router } from "express";

import {
  contactpageRegistration,
  getallContacts,
  updateNoti,
} from "../controllers/contact.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/submit").post(contactpageRegistration);
router.route("/getall").get(verifyJWT,getallContacts);
router.route("/update").put(updateNoti);

export default router;
