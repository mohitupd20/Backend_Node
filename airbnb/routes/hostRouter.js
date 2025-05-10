const express = require('express');
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  res.send(`<h1>Register your Home here</h1>
      <form action="/add-home" method="POST">
      <input type="text" name="houseName" placeholder="Enter the name of your House">
      <input type="submit" value="Submit">`);
});

hostRouter.post("/add-home", (req, res, next) => {
  console.log(
    "POST request received for /add-home",
    req.method,
    req.url,
    req.body
  );
  return res.send(`<h1>Thank you for registering your home!</h1>
      <a href="/add-home">Add Home</a>`);
});

module.exports = hostRouter;