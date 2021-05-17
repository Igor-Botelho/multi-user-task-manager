"use strict";

const services = require("../../src/services");
const testWithDb = require("../teste-with-db");
const { projects } = require("../fixtures");

testWithDb(() => {
  describe("Projects", () => {
    it("project: project a new user ", async () => {
      const projectData = projects();

      const [createdProject] = await services.projects.creat(projectData);

      const { _id } = createdProject._doc;

      expect(createdProject._doc).toEqual({ ...projectData, _id });
    });

    it("find: ", async () => {
      const projectData = projects();

      const [createdProject] = await services.projects.creat(projectData);

      const { userId } = createdProject._doc;

      const [project] = await services.projects.findByUser(userId);

      expect(project._doc).toEqual(createdProject._doc);
    });

    it("remove: ", async () => {
      const projectData = projects();

      const [createdProject] = await services.projects.creat(projectData);

      const { userId } = createdProject._doc;

      const [project] = await services.projects.findByUser(userId);

      expect(project._doc).toEqual(createdProject._doc);

      await services.projects.removeById(project._doc._id);

      const projectRemoved = await services.projects.findByUser(userId);

      expect(projectRemoved).toEqual([]);
    });

    it("update: ", async () => {
      const projectData = projects();

      const [createdProject] = await services.projects.creat(projectData);

      const { _id: projectId } = createdProject._doc;

      const newName = "new name";

      const projectUpdated = await services.projects.update(projectId, {
        name: newName,
      });

      expect(projectUpdated._doc.name).toEqual(newName);
    });
  });
});
