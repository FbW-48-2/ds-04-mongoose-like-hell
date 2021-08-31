import mongoose from "mongoose";
import express from "express";
import Student from "./models/Student.js";

//connection to mongoDB using mongoose

const MONGO_URI =
  "mongodb+srv://new_use_1:7qQHu6lDWhWj3Me9@cluster0.ft5sz.mongodb.net/students_db?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection successful!"))
  .catch((err) => console.log("Connection sucks!!", err));

//initializing middleware - express here

const app = express();
app.use(express.json());
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`ÀPI started up on http://localhost:${PORT}`);
});

//making my CRUD operations below

app.get("/", (req, res) => {
  res.send("Hi! This is the students API");
});

//get all students below

app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    next(error);
  }
});

//get single student by id

app.get("/students/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id);
    res.json(student);
  } catch (error) {
    next(error);
  }
});

//create a student

app.post("/students", async (req, res) => {
  const body = req.body;
  try {
    const studentNew = await Student.create(body);
    res.json(studentNew);
  } catch (error) {
    next(error);
  }
});

//update a student

app.put("/students/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const studentUpdated = await Student.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.json(studentUpdated);
  } catch (error) {
    next(error);
  }
});

//delete student
app.delete("/students/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const studentDeleted = await Student.findByIdAndDelete(id);
    res.json(studentDeleted);
  } catch (error) {
    next(error);
  }
});

//my central error handler is below

app.use((error, req, res, next) => {
  console.log(error);
  res.status(400).json({
    error: error.message,
  });
});
