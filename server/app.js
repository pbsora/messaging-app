const express = require("express");
const app = express();
const http = require("http").Server(app);
const cors = require("cors");

app.use(cors);

const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  console.log(`${socket.id} user just connected!`);
  socket.on("disconnect", () => {
    console.log("A user just disconnected");
  });
  socket.on("send-message", (data) => {
    socket.broadcast.emit("chat-message", data);
  });
  /* socket.emit("chat-message", "Hello mom"); */
});

http.listen(3000, () => {
  console.log("Listening on port 3000");
});
