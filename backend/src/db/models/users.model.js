"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  { versionKey: false }
);

const users = mongoose.model("Users", schema);

module.exports = users;
