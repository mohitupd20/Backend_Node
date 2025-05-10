const path = require("path");
const express = require("express");
const userRouter = express.Router();
const rootDir = require("../utils/pathUtils");
const { houseNames } = require("./hostRouter");
userRouter.get("/", (req, res, next) => {
  console.log(houseNames);
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = userRouter;
