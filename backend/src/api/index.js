module.exports = async function (app) {
  app.use(require("./users.routes"));
  app.use(require("./project.routes"));
  app.use(require("./tasks.routes"));
};
