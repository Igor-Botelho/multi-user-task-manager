var mongoose = require("mongoose");

module.exports = (projectId) => {
  return {
    name: "first task",
    completed: false,
    projectId: projectId || mongoose.Types.ObjectId(),
  };
};
