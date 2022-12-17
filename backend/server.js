//requering the dependencies that want for the backend process

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

//importing the routes
const studentRoute = require("./routes/students.js");

//using the routes
app.use("/student", studentRoute); //-> http://localhost:3001/student

//declare a port number to run the server
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

//to avoid a warning message on console when starting the server
mongoose.set("strictQuery", true);

//declare a mongodb connection string
const URL = process.env.MONGODB_URL;

//mongodb configurations
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection success!!!");
});

//run the mongodb on thr port
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
