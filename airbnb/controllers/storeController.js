const Home = require("../models/home");
const Favourite = require("../models/favourite");
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
  Home.fetchAll((registeredHomes) => {
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
  Favourite.getFavourites((favourites) => {
    Home.fetchAll((registeredHomes) => {
      const favouriteHomes = registeredHomes.filter((home) =>
        favourites.includes(home.id)
      );
      res.render("store/favourite-list", {
        favouriteHomes: favouriteHomes,
        pageTitle: "My Favourites",
        currentPage: "favourites",
      });
    });
  });
};

// (req, res, next) => {
//   res.render("store/favourite-list", {
//     pageTitle: "My Favourite List",
//   });
// };
exports.addToFavouriteList = (req, res, next) => {
  console.log("Adding to favourites", req.body);
  Favourite.addToFavourite(req.body.Id, (err) => {
    if (err) {
      console.error("Error adding to favourites", err);
    }
    res.redirect("/favourite-list");
  });
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.fetchById(homeId, (home) => {
    if (!home) {
      res.redirect("/homes");
    } else {
      res.render("store/home-detail", {
        home: home,
        pageTitle: "Home Details",
      });
    }
  });
};
