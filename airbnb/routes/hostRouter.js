const path = require("path");
const express = require("express");
const hostRouter = express.Router();
const rootDir = require("../utils/pathUtils");

hostRouter.get("/add-home", (req, res, next) => {
  res.render("addHome", {
    pageTitle: "Register Your Home on AirBnB",
  });
});
const registeredHomes = [];
hostRouter.post("/add-home", (req, res, next) => {
  console.log(
    "POST request received for /add-home",
    req.method,
    req.url,
    req.body
  );
  registeredHomes.push(req.body);

  res.render("homeAdded", {
    pageTitle: "Home Added Successfully",
  });
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
