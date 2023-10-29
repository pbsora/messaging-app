const express = require("express");
const app = express();
const http = require("http").Server(app);
const cors = require("cors");
const bcrypt = require("bcryptjs");
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:5173",
  },
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL).catch((err) => console.log(err));

app.get("/a", (req, res) => {
  res.send("deu");
  console.log("deu");
});

io.use((socket, next) => {
  const username = socket.handshake.auth.username;

  if (!username) {
    return next(new Error("Invalid username"));
  }
  socket.username = username;
  next();
});

io.on("connection", (socket) => {
  let users = [];
  console.log(`${socket.id} user just connected!`);
  socket.on("message", (data) => {
    io.emit("chat-message", data);
  });

  for (let [id, socket] of io.of("/").sockets) {
    users.push({
      userID: id,
      username: socket.username,
    });
  }
  io.emit("users", users);
  console.log(users);

  socket.on("private message", ({ content, to }) => {
    socket.to(to).emit("private message", {
      content,
      from: socket.id,
    });
  });

  socket.on("disconnect", () => {
    console.log(users);
    console.log(`${socket.username} just disconnected`);
    users = users.filter((user) => user.username !== socket.username);
    io.emit("users", users);
    socket.disconnect();
  });
});

http.listen(3000, () => {
  console.log("Listening on port 3000");
});
