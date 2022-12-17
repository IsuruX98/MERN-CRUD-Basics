//creating the router
const router = require("express").Router();

const { response } = require("express");
//importing the model
let student = require("../models/student");

//creating CRUD operations

//Create-insert -> http://localhost:3001/student/add
router.route("/add").post((req, res) => {
  //catching the input data from the frontrnd
  const name = req.body.name;
  const age = Number(req.body.age);
  const gender = req.body.gender;

  //create the js object for new
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

//Retriew-read -> http://localhost:3001/student/
router.route("/").get((req, res) => {
  //getting the data from the database
  student
    .find()
    .then((studentsDetails) => {
      res.json(studentsDetails);
    })
    .catch((err) => {
      console.log(err);
    });
});

//Update -> http://localhost:3001/student/update/:id
router.route("/update/:id").put(async (req, res) => {
  //taking the specified id from the url and store it in a variable
  let userId = req.params.id;

  //catching the input data from the frontrnd destructure way
  const { name, age, gender } = req.body;

  //create the js object for update
  const updateStudent = {
    name,
    age,
    gender,
  };

  //update the data of the user
  const update = await student
    .findByIdAndUpdate(userId, updateStudent)
    .then(() => {
      res.status(200).send({ status: "user updated", user: update });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "user update failed", error: err.message });
    });
});

//Delete -> http://localhost:3001/student/delete/:id
router.route("/delete/:id").delete(async (req, res) => {
  //taking the specified id from the url and store it in a variable
  let userId = req.params.id;

  //delete the data
  await student
    .findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "user deleted" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "user delete failed", error: err.message });
    });
});

//getting data from only one account -> http://localhost:3001/student/get/:id

router.route("/get/:id").get(async (req, res) => {
  //taking the specified id from the url and store it in a variable
  let userId = req.params.id;

  //getting data
  const user = await student
    .findById(userId)
    .then(() => {
      res.status(200).send({ status: "user fetched", user: user });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "user fetch failed", error: err.message });
    });
});

//exporting the model
module.exports = router;

//after finish routes, test the routes and the go for the frontend
