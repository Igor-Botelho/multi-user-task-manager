"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  { versionKey: false }
);

const projects = mongoose.model("Projects", schema);

module.exports = projects;
