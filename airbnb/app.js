const express = require("express");
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const app = express(); 
app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);  //Handeling common Path
app.use(hostRouter)

app.use((req, res, next) => {
  res.status(404).send(`<h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>`);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
