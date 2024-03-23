import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(passport.initialize());

// routes import
import contactPageRouter from "./routes/contactPage.routes.js";
import userRouter from "./routes/user.routes.js";
import passport from "passport";
import authRoutes from "./routes/oauth.routes.js";


app.use("/contact", contactPageRouter);

// User
app.use("/users", userRouter);

// Oauth
app.use("/login", authRoutes);

export { app };
