const Home = require("../models/home");
exports.getAddHome = (req, res, next) => {
  res.render("host/addHome", {
    pageTitle: "Register Your Home on AirBnB",
  });
};
exports.getIndex = (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes) => {
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "Welcome to AirBnB",
    });
  });
};

exports.getResisteredHomes = (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes) => {
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Home List",
    });
  }); //fetching all the registered homes from the Home model

  //we can directly like this {registeredHomes} instead of {registeredHomes: registeredHomes} this means that the key and value are same
};

exports.post404 = (req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
};

exports.getbookings = (req, res, next) => {
  res.render("store/booking", {
    pageTitle: "Booking",
  });
};
exports.getFavouriteList = (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes) => {
    res.render("store/favourite-list", {
      registeredHomes: registeredHomes,
      pageTitle: "My Favourite List",
    });
  })};




// (req, res, next) => {
//   res.render("store/favourite-list", {
//     pageTitle: "My Favourite List",
//   });
// };