"use strict";

const { dbUsers } = require("../db/models");

exports.creat = function creat(userData) {
  return dbUsers.insertMany(userData);
};

exports.findByEmail = function findByEmail(email) {
  return dbUsers.find({ email });
};

exports.findById = function findById(userId) {
  return dbUsers.findById(userId);
};
