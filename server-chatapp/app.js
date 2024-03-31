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
app.use(express.json());
app.use(express.urlencoded({ limit: "16kb", extended: true }));

// routes
import chatappRoutes from "./routes/chatapp.routes.js";
app.use("/chatapp", chatappRoutes);

export { app };
