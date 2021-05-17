"use strict";

const mongoose = require("mongoose");
const mongoConfig = require("../../backend/src/configs/mongo.config");

module.exports = function mongoServer() {
  if (mongoose.connection.readyState != 0) {
    return mongoose;
  }

  mongoose.connect(mongoConfig.urlConection, mongoConfig.options);

  return new Promise((resolve) => {
    mongoose.connection.on("open", function (ref) {
      return resolve(mongoose);
    });
  });
};
