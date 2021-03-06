const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const exp = require("constants");

require("dotenv").config;

const app = express();
const port = process.env.PORT || 5000;

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
mongoose.connect("mongodb://localhost/tracker");
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb Database started ...");
});
app.use(cors());
app.use(express.json());

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server Run On : ${port}`);
});
