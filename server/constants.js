import dotenv from "dotenv";

dotenv.config({
  path: "../.env",
});

const DB_NAME = "contactPage";
const PASSWORD = process.env.PASSWORD;
const EMAIL = process.env.EMAIL;
const SERVICE = process.env.SERVICE;
const USERID = process.env.USERID;
const cors_orgin = process.env.CORS_ORIGIN;
export { DB_NAME, EMAIL, PASSWORD, SERVICE, USERID, cors_orgin };
