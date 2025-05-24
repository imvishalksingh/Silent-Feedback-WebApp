const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();

app.use(cors({
  origin: "hhttps://silent-feedback-web-app-1vkf.vercel.app/", // change to your Vercel frontend URL
  methods: ["GET", "POST"],
  credentials: true
}));

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://silent-feedback-web-app-1vkf.vercel.app/", // same here
    methods: ["GET", "POST"],
    credentials: true
  }
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("join_room", (roomId) => {
    socket.join(roomId);
    console.log(`User joined room: ${roomId}`);
  });

  socket.on("send_feedback", (data) => {
    console.log("Feedback received:", data);
    io.to(data.roomId).emit("new_feedback", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Socket server running on port ${PORT}`);
});
