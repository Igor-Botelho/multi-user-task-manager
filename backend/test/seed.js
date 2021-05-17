const server = require("../src/db/server");

const { projects, users, tasks } = require("./fixtures");

const services = require("../src/services");

async function seed() {
  const mongoose = await server();

  const collectionsNames = await getCollections(mongoose);

  await clearCollection(mongoose, collectionsNames);

  const [user] = await services.users.creat(users);

  const project = projects(user._id);

  const [createdProjetct] = await services.projects.creat(project);

  const { _id: projectId } = createdProjetct;

  await services.tasks.creat(tasks(projectId));
  await services.tasks.creat(tasks(projectId));
  await services.tasks.creat(tasks(projectId));
  await services.tasks.creat(tasks(projectId));
  await services.tasks.creat(tasks(projectId));

  mongoose.connection.close();
}

function getCollections(mongoose) {
  return new Promise((resolve) => {
    mongoose.connection.db.listCollections().toArray(function (err, names) {
      return resolve(names);
    });
  });
}

async function clearCollection(mongoose, collectionsNames) {
  if (collectionsNames) {
    for (const { name } of collectionsNames) {
      await mongoose.connection.collection(name).drop();
    }
  }
}

seed();
