const path = require("path");
const express = require("express");
const userRouter = express.Router();
const rootDir = require("../utils/pathUtils");
const { registeredHomes } = require("./hostRouter");
const homeController = require("../controllers/homes");
userRouter.get("/", homeController.getResisteredHomes); 

module.exports = userRouter;
