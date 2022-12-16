const router = require("express").Router();

//importing the model
let student = require("../models/student");

//creating operations

//Create-insert
router.route("/add").post((req, res) => {
  //catching the input data from the frontrnd
  const name = req.body.name;
  const age = Number(req.body.age);
  const gender = req.body.gender;

  //create the js object
  const newStudent = new student({
    name,
    age,
    gender,
  });

  //sending the object to the datbase and giving the js promises
  newStudent
    .save()
    .then(() => {
      res.json("student added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//Retrieve
router.route("/").post();

//exporting the model
module.exports = router;
