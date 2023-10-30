const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
  description: { type: String, default: "Hi, i'm using momiji" },
});

module.exports = mongoose.model("User", User);
