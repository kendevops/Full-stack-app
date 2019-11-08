//MONGO DB PW: yv4BdBeQVGPtnpJt
//MONGO DB: mongodb+srv://kenny:<password>@cluster0-3jtpa.mongodb.net/test?retryWrites=true&w=majority

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const stuffRoutes = require("./routes/stuff");
const userRoutes = require("./routes/user");

const app = express();

mongoose
  .connect(
    "mongodb+srv://kenny:yv4BdBeQVGPtnpJt@cluster0-3jtpa.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connection to the Mongodb Atlas Successful!");
  })
  .catch(error => {
    console.log("unable to connect to database");
    console.log(error);
  });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());

app.use("/api/stuff", stuffRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;
