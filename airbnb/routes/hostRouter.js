const path = require("path");
const express = require("express");
const hostRouter = express.Router();
const rootDir = require("../utils/pathUtils");
const HomeController = require("../controllers/homes");

hostRouter.get("/add-home", HomeController.getAddHome);

hostRouter.post("/add-home", HomeController.postAddHome );

exports.hostRouter = hostRouter;

