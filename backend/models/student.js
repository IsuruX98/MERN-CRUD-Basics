const mongoose = require("mongoose");

const schema = mongoose.Schema;

//creating a new schema
const studentSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

//creating the model
const student = mongoose.model("student", studentSchema);

//exporting the model
module.exports = student;
