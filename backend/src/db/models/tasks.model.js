"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    creationDate: { type: Date, default: Date.now },
    completed: { type: Boolean, required: true, default: false },
    description: { type: String },
    finishDate: { type: Date },
    projectId: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
  },
  { versionKey: false }
);

const task = mongoose.model("Task", schema);

module.exports = task;
