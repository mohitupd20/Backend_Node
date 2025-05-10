const express = require("express");
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtils");
const app = express(); 
app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);  //Handeling common Path
app.use(hostRouter)

app.use((req, res, next) => {
  res.status(404).sendFile(
    path.join(rootDir, "views", "404.html")
  );
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
