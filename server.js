if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Dependencies
const express = require("express");
const app = express();
const expresslayoutts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expresslayoutts);
app.use(express.static("public"));

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {
  // npm i dotenv
  useNewUrlParser: true,
}); // it shuld come from the env set up the sma us api key

const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to mongoose"));

// we have to hook the router to make ou app run
const indexRouter = require("./routes/index");
// app.get("/", (req, res, next) => {
//   res.json({
//     message: "hello welcome to MVC-model-view-controller",
//   });
// });

app.use("/", indexRouter);

const port = process.env.PORT || 3000; // the server will tell us where to deply and use the port
app.listen(port, () => {
  // npm run devStart
  console.log(`Listening on ${port}`);
});
// install mongoose npm i mongoose
