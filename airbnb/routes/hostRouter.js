const path = require("path");
const express = require("express");
const hostRouter = express.Router();
const rootDir = require("../utils/pathUtils");

hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views/addHome.html"));
});
const registeredHomes = [];
hostRouter.post("/add-home", (req, res, next) => {
  console.log(
    "POST request received for /add-home",
    req.method,
    req.url,
    req.body
  );
  registeredHomes.push({ registeredHomes: req.body.registeredHomes });

  res.sendFile(path.join(rootDir, "views", "homeAdded.html"));
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
