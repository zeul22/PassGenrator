import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ limit: "16kb", extended: false }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(morgan("common"));

// Routes

// DashBoard
import generalRouter from "./routes/general.routes";
import managerRouter from "./routes/manager.routes";
import salesRouter from "./routes/sales.routes";
import clientRouter from "./routes/client.routes";

// Will have all the routes within this
app.use("/client", clientRouter);
app.use("/general", generalRouter);
app.use("/manager", managerRouter);
app.use("/sales", salesRouter);

export { app };
