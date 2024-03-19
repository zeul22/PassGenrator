import { Router } from "express";

import {
  contactpageRegistration,
  getallContacts,
  updateNoti,
} from "../controllers/contact.controller.js";

const router = Router();

router.route("/submit").post(contactpageRegistration);
router.route("/getall").get(getallContacts);
router.route("/update").put(updateNoti);

export default router;
