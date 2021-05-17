var mongoose = require("mongoose");

module.exports = (userId) => {
  return {
    userId: userId || mongoose.Types.ObjectId(),
    name: "project name",
  };
};
