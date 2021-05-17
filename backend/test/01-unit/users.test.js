"use strict";

const services = require("../../src/services");
const testWithDb = require("../teste-with-db");
const { users } = require("../fixtures");

testWithDb(() => {
  describe("Users", () => {
    it("creat: creat a new user ", async () => {
      const [createdUser] = await services.users.creat(users);

      const { _id } = createdUser._doc;

      expect(createdUser._doc).toEqual({ ...users, _id });
    });

    it("find: ", async () => {
      const [createdUser] = await services.users.creat(users);

      const { _id: userId } = createdUser._doc;

      const user = await services.users.findById(userId);

      expect(user._doc).toEqual(createdUser._doc);
    });

    it("find: ", async () => {
      const [createdUser] = await services.users.creat(users);

      const { email } = createdUser._doc;

      const [user] = await services.users.findByEmail(email);

      expect(user._doc).toEqual(createdUser._doc);
    });
  });
});
