const fs = require("fs");
const rootDir = require("../utils/pathUtils");
const pathUtils = require("path");
const homeDataPath = pathUtils.join(rootDir, "data", "homes.json");
// Fix: define registeredHomes array
const registeredHomes = [];

module.exports = class Home {
  constructor(registeredHomes, pricePerNight, location, rating, image) {
    this.registeredHomes = registeredHomes;
    this.pricePerNight = pricePerNight;
    this.location = location;
    this.rating = rating;
    this.image = image;
  }
  save() {
    this.id = Math.random().toString();
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);

      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (err) => {
        if (err) {
          console.error("Error writing to file", err);
        } else {
          console.log("Home data saved successfully");
        }
      });
    });
  }
  static fetchAll(callback) {
    fs.readFile(homeDataPath, (err, data) => {
      callback(err ? [] : JSON.parse(data)); //to remove async issues, we can use callback function
    });
  }
  static fetchById(homeId, callback) {
    this.fetchAll((Homes) => {
      const HomeFound = Homes.find((home) => home.id === homeId);
      callback(HomeFound);
    });
  }
};
