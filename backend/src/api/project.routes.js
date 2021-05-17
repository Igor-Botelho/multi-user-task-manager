const express = require("express");
const services = require("../services");
const router = express.Router();

router.get("/api/:userId/projects", async (req, res) => {
  const { userId } = req.params;

  const projects = await services.projects.findByUser(userId);

  res.send(projects);
});

router.post("/api/project", async (req, res) => {
  const body = req.body;

  await services.projects.creat(body);

  const projects = await services.projects.findByUser(body.userId);

  res.send(projects);
});

router.delete("/api/:userId/:projectId", async (req, res) => {
  const { userId, projectId } = req.params;

  await services.projects.removeById(projectId);

  const projects = await services.projects.findByUser(userId);

  res.send(projects);
});

router.put("/api/:userId/:projectId", async (req, res) => {
  const { body, params } = req;

  const { projectId, userId } = params;

  await services.projects.update(projectId, body);

  const projects = await services.projects.findByUser(userId);

  res.send(projects);
});

module.exports = router;
