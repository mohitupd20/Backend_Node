const Home = require("../models/home");
exports.getAddHome = (req, res, next) => {
  res.render("addHome", {
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

  res.render("homeAdded", {
    pageTitle: "Home Added Successfully",
  });
};


exports.getResisteredHomes = (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes )=>{
    res.render("home", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
    })
  }); //fetching all the registered homes from the Home model
 
   //we can directly like this {registeredHomes} instead of {registeredHomes: registeredHomes} this means that the key and value are same
};

exports.post404 = (req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
};
