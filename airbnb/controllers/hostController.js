const Home = require("../models/home");
exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pageTitle: "Register Your Home on AirBnB",
    editing: false,
  });
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Home List",
    });
  });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  Home.fetchById(homeId, (home) => {
    if (!home) {
      console.log("Home not found for editing.");
      return res.redirect("/host/host-home-list");
    }

    console.log(homeId, editing, home);
    res.render("host/edit-home", {
      home: home,
      pageTitle: "Edit your Home",
      editing: editing,
    });
  });
};

exports.postEditHome = (req, res, next) => {
  const { id, registeredHomes, pricePerNight, location, rating, image } =
    req.body;

  const home = new Home(
    registeredHomes,
    pricePerNight,
    location,
    rating,
    image
  );
  home.id = id; // Set the ID for the updated home
  home.save(); // Save the updated home data
  res.redirect("/host/host-home-list"); // Redirect to the host home list after saving
};

exports.postAddHome = (req, res, next) => {
  //   const Home = new Home (
  //     req.body.registeredHomes,
  //     req.body.pricePerNight,
  //     req.body.location,
  //     req.body.rating,
  //     req.body.image
  //   );

  //destructuring the req.body object to get the values
  const { registeredHomes, pricePerNight, location, rating, image } = req.body;
  const home = new Home(
    registeredHomes,
    pricePerNight,
    location,
    rating,
    image
  );

  home.save();

  res.render("host/homeAdded", {
    pageTitle: "Home Added Successfully",
  });
};
