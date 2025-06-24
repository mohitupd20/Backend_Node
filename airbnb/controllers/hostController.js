const Home = require("../models/home");
exports.getAddHome = (req, res, next) => {
  res.render("host/addHome", {
    pageTitle: "Register Your Home on AirBnB",
  });
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



