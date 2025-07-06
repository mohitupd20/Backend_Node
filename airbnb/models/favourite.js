const fs = require("fs");
const rootDir = require("../utils/pathUtils");
const pathUtils = require("path");
const favouriteDataPath = pathUtils.join(rootDir, "data", "favourite.json");
const homeDataPath = pathUtils.join(rootDir, "data", "homes.json");

// Fix: define registeredHomes array
const registeredHomes = [];

module.exports = class favourite {
  static addToFavourite(id, callback) {
    favourite.getFavourites((favourites) => {
      if (favourites.includes(id)) {
        callback("Home already in favourites");
      } else {
        favourites.push(id);
        fs.writeFile(favouriteDataPath, JSON.stringify(favourites), callback);
      }
    });
  }

  static getFavourites(callback) {
    fs.readFile(favouriteDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
