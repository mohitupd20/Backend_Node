const path = require("path");
const express = require("express");
const userRouter = express.Router();
const rootDir = require("../utils/pathUtils");
const { registeredHomes } = require("./hostRouter");
const storeController = require("../controllers/storeController");
userRouter.get("/", storeController.getIndex); 
userRouter.get("/homes", storeController.getResisteredHomes);
userRouter.get("/booking", storeController.getbookings);
userRouter.get("/favourite-list", storeController.getFavouriteList);

userRouter.get("/homes/:homeId", storeController.getHomeDetails);
userRouter.post("/favourite-list", storeController.addToFavouriteList);
module.exports = userRouter;
