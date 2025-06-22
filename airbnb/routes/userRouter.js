const path = require("path");
const express = require("express");
const userRouter = express.Router();
const rootDir = require("../utils/pathUtils");
const { registeredHomes } = require("./hostRouter");
userRouter.get("/", (req, res, next) => {
  console.log(registeredHomes);
  res.render("home", { registeredHomes: registeredHomes }); //we can directly like this {registeredHomes} instead of {registeredHomes: registeredHomes} this means that the key and value are same
});

module.exports = userRouter;
