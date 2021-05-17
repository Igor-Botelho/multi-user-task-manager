"use strict";

const mongoose = require("mongoose");
const mongoConfig = require("../configs/mongo.config");
const expresslistener = require("./express.server");

function mongoServer() {
  if (mongoose.connection.readyState != 0) {
    return mongoose;
  }

  mongoose.connect(mongoConfig.urlConection, mongoConfig.options);

  expresslistener();

  return new Promise((resolve) => {
    mongoose.connection.on("open", function (ref) {
      return resolve(mongoose);
    });
  });
}

mongoServer();
