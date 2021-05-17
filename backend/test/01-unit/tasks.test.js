"use strict";

const services = require("../../src/services");
const testWithDb = require("../teste-with-db");
const { tasks } = require("../fixtures");

testWithDb(() => {
  describe("Task", () => {
    it("task: task a new user ", async () => {
      const tasksData = tasks();

      const [createdTask] = await services.tasks.creat(tasksData);

      const { _id, creationDate } = createdTask._doc;

      expect(createdTask._doc).toEqual({ ...tasksData, _id, creationDate });
    });

    it("find: ", async () => {
      const tasksData = tasks();

      const [createdTask] = await services.tasks.creat(tasksData);

      const { _id: taskId } = createdTask._doc;

      const task = await services.tasks.findByProject(createdTask.projectId);

      expect(task._doc).toEqual(task._doc);
    });

    it("remove: ", async () => {
      const tasksData = tasks();

      const [createdTask] = await services.tasks.creat(tasksData);

      const { projectId } = createdTask._doc;

      const [task] = await services.tasks.findByProject(projectId);

      expect(task._doc).toEqual(createdTask._doc);

      await services.tasks.removeById(task._doc._id);

      const taskRemoved = await services.tasks.findByProject(projectId);

      expect(taskRemoved).toEqual([]);
    });

    it("update: ", async () => {
      const tasksData = tasks();

      const [createdTask] = await services.tasks.creat(tasksData);

      const { _id: taskId } = createdTask._doc;

      const newName = "new name";

      const taskUpdated = await services.tasks.update(taskId, {
        name: newName,
      });

      expect(taskUpdated._doc.name).toEqual(newName);
    });
  });
});
