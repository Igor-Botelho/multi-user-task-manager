"use strict";

const { findByProject, removeById } = require("./tasks.service");

const { dbProjects } = require("../db/models");

exports.creat = function creat(projectData) {
  return dbProjects.insertMany(projectData);
};

exports.findByUser = function findByUser(userId) {
  return dbProjects.find({ userId });
};

exports.removeById = async function removeById(projectId) {
  const tasks = await findByProject(projectId);

  for (const task of tasks) {
    await removeById(task._id);
  }

  return dbProjects.deleteOne({ _id: projectId });
};

exports.update = function update(projectId, projectData) {
  return dbProjects.findOneAndUpdate({ _id: projectId }, projectData, {
    new: true,
  });
};
