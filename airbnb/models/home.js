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
    Home.fetchAll((registeredHomes) => {
      if (this.id) {
        // edit home case

        registeredHomes = registeredHomes.map((home) =>
          home.id === this.id ? this : home
        );
      } else {
        // add home case
        this.id = Math.random().toString();
        registeredHomes.push(this);
      }

      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        console.log("File Writing Concluded", error);
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(homeDataPath, (err, data) => {
      callback(err ? [] : JSON.parse(data)); //to remove async issues, we can use callback function
    });
  }

  static deleteById(id, callback) {
    this.fetchAll((homes) => {
      const updatedHomes = homes.filter((home) => home.id !== id);
      fs.writeFile(homeDataPath, JSON.stringify(updatedHomes), (err) => {
        if (err) {
          callback(err);
        } else {
          callback(null);
        }
      });
    });
  }
  static fetchById(homeId, callback) {
    this.fetchAll((Homes) => {
      const HomeFound = Homes.find((home) => home.id === homeId);
      callback(HomeFound);
    });
  }
};
