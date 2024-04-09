import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config({
  path: "./.env",
});
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ limit: "16kb", extended: true }));

// routes
import messageRoutes from "../server/routes/message.routes.js";

app.use("/messages", messageRoutes);

export { app };
