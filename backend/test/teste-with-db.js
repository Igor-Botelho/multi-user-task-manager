const server = require("../test/server-test");

module.exports = async function testWithDb(fn) {
  let mongoose;

  beforeEach(async () => {
    mongoose = await server();

    const collectionsNames = await getCollections(mongoose);

    await clearCollection(mongoose, collectionsNames);
  });

  afterAll(async () => {
    mongoose.connection.close();
  });

  fn();
};

function getCollections(mongoose) {
  return new Promise((resolve) => {
    mongoose.connection.db.listCollections().toArray(function (err, names) {
      return resolve(names);
    });
  });
}

async function clearCollection(mongoose, collectionsNames) {
  for (const { name } of collectionsNames) {
    await mongoose.connection.collection(name).drop();
  }
}
