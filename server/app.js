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

io.use((socket, next) => {
  const username = socket.handshake.auth.username;

  if (!username) {
    return next(new Error("Invalid username"));
  }
  socket.username = username;
  next();
});

io.on("connection", (socket) => {
  const users = [];
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
  /* socket.on("newUser", (data) => {
    users.push(data);
    console.log(users);
    io.emit("newUserResponse", users);
  }); */

  socket.on("disconnect", () => {
    console.log(`${socket.id} just disconnected`);
    console.log(users);
    /* users = users.filter((user) => user.socketId !== socket.id);
    io.emit("newUserResponse", users); */
    socket.disconnect();
  });

  /* socket.emit("chat-message", "Hello mom"); */
});

http.listen(3000, () => {
  console.log("Listening on port 3000");
});
