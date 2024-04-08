import express from "express";
import dotenv from "dotenv";
import cors from "cors";

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
import messageRoutes from "./routes/message.routes.js";
import cookieParser from "cookie-parser";

app.use("/messages", messageRoutes);

export { app };
