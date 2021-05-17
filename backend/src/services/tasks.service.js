"use strict";

const { dbTasks } = require("../db/models");

exports.creat = function creat(taskData) {
  return dbTasks.insertMany(taskData);
};

exports.findByProject = function findByProject(projectId) {
  return dbTasks.find({ projectId });
};

exports.removeById = function removeById(taskId) {
  return dbTasks.deleteOne({ _id: taskId });
};

exports.update = function update(taskId, taskData) {
  if (taskData && taskData.completed) {
    taskData.finishDate = new Date();
  }

  return dbTasks.findOneAndUpdate({ _id: taskId }, taskData, {
    new: true,
  });
};
