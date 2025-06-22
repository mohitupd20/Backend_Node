const express = require("express");
const path = require("path");
const app = express(); 
app.set("view engine", "ejs");
const rootDir = require("./utils/pathUtils");
app.use(express.static(path.join(__dirname, "public")));
const userRouter = require("./routes/userRouter");

const {hostRouter} = require("./routes/hostRouter");

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);  //Handeling common Path
app.use(hostRouter)

app.use((req, res, next) => {
  res.status(404).render(
   '404',
    { pageTitle: "Page Not Found" } )
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
