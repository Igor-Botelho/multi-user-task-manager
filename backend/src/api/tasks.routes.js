const express = require("express");
const services = require("../services");

const router = express.Router();

router.get("/api/:projectId/tasks", async (req, res) => {
  const { projectId } = req.params;

  const tasks = await services.tasks.findByProject(projectId);

  res.send(tasks);
});

router.post("/api/task/creat", async (req, res) => {
  const { body } = req;

  const [taskcreated] = await services.tasks.creat(body);

  const tasks = await services.tasks.findByProject(taskcreated.projectId);

  res.send(tasks);
});

router.delete("/api/task/:projectId/:taskId", async (req, res) => {
  const { params } = req;

  const { taskId, projectId } = params;

  await services.tasks.removeById(taskId);

  const tasks = await services.tasks.findByProject(projectId);

  res.send(tasks);
});

router.post("/api/task/:taskId", async (req, res) => {
  const { params, body } = req;

  const { taskId } = params;

  const taskUpdated = await services.tasks.update(taskId, body);

  const tasks = await services.tasks.findByProject(taskUpdated.projectId);

  res.send(tasks);
});

module.exports = router;
