import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { Server } from "socket.io";
import http from "http";
import { cors_orgin } from "./constants.js";
// import { app } from "./socket/socket.websocket.js";

// const app = express();

//---------------------------------------- SOCKET



const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: cors_orgin,
    credentials: true,
  },
});

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

const userSocketMap = {}; // {userId: socketId}

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId != "undefined") userSocketMap[userId] = socket.id;

  // io.emit() is used to send events to all the connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  // socket.on() is used to listen to the events. can be used both on client and server side
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

// --------------------------
app.use(
  cors({
    origin: cors_orgin,
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
import messageRoutes from "./routes/message.routes.js";

app.use("/contact", contactPageRouter);

// User
app.use("/users", userRouter);

// Oauth
app.use("/login", authRoutes);

// ChatApp
app.use("/messages", messageRoutes);

export { app,server,io };
