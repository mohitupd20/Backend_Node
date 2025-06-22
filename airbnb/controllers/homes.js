exports.getAddHome = (req, res, next) => {
  res.render("addHome", {
    pageTitle: "Register Your Home on AirBnB",
  });
};
const registeredHomes = [];
exports.postAddHome = (req, res, next) => {
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
};
exports.registeredHomes = registeredHomes;

exports.getResisteredHomes = (req, res, next) => {
  console.log(registeredHomes);
  res.render("home", {
    registeredHomes: registeredHomes,
    pageTitle: "airbnb Home",
  }); //we can directly like this {registeredHomes} instead of {registeredHomes: registeredHomes} this means that the key and value are same
};
