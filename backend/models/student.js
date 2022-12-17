const mongoose = require("mongoose");

const schema = mongoose.Schema;

//creating a new schema
const studentSchema = new schema({
  //no need to create a id because mongodb will automatically create a id for a record
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
