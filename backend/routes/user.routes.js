const {
  createNewUser,
  loginExistingUser,
} = require("../controller/user.controller");

const user = require("express").Router();

/*==========create new user========== */
user.post("/signup", createNewUser);

/*=========login existing users======== */
user.post("/login", loginExistingUser);

module.exports = user;
