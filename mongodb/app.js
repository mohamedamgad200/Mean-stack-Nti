const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port = 3000;
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
//open connection
// mongoose.connect("mongodb://localhost:27017", { dbName: "mongodbsection" });
//mongoose.connect("mongodb://127.0.0.1:27017", { dbName: "mongodbsection" });
app.use(express.json());
async function connectdb() {
  await mongoose.connect("mongodb://localhost:27017", {
    dbName: "mongodbsection",
  });
  console.log("mogodb connected");
}
connectdb().catch((err) => console.error(err));
app.get("/", (req, res) => {
  res.send("server running");
});
// const studentSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   grade: Number,
//   isActive: Boolean,
// });
const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    age: { type: Number, min: [5, "minmum age is 5 "], max: 12 },
    grade: {
      type: Number,
      validate: {
        validator: Number.isInteger,
        message: "grade should be integer",
      },
    },
    isActive: Boolean,
    email: {
      type: String,
      //match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      validate: {
        validator: (value) => {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
        },
        message: "Invalid email",
      },
    },
    courses: [
      {
        subject: String,
        score: Number,
      },
    ],
  },
  { timestamps: true }
);
const Student = mongoose.model("students", studentSchema);
Student.syncIndexes().then(() => console.log("indexes sync"));
app.post("/student/addstudent", async (req, res) => {
  try {
    console.log(req.body);
    // const myStudent = await Student.create(req.body);
    let myStudent = new Student(req.body);
    await myStudent.save();
    res.status(201).json(myStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
//take array of students
app.post("/students/addmore", async (req, res) => {
  const myStudent = await Student.insertMany(req.body);
  res.status(201).json(myStudent);
});
// app.get("/students/getStudents", async (req, res) => {
//   // const students = await Student.find();
//   // const students = await Student.find({name:'ali',age:10});
//   const students = await Student.find({ $and: [{ name: "ali" }, { age: 10 }] });
//   res.status(200).json(students);
// });
app.get("/students/getStudents/:name?/:age?", async (req, res) => {
  // const students = await Student.find();
  // const students = await Student.find({name:'ali',age:10});
  let students;
  if (req.params.name && req.params.age) {
    students = await Student.find({
      $and: [{ name: req.params.name }, { age: req.params.age }],
    });
    students = await Student.find({
      $or: [{ name: req.params.name }, { age: req.params.age }],
    });
  } else {
    students = await Student.find();
  }
  res.status(200).json(students);
});
// async function disConnectdb() {
//   await mongoose.disconnect("mongodb://localhost:27017", {
//     dbName: "mongodbsection",
//   });
//   console.log("mogodb disconnected");
// }
// disConnectdb().catch((err) => console.error(err));
app.listen(port, () => console.log(`server started at port ${port}`));
