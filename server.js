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
  } catch (err) {
    next(err);
  }
});

//get single student by id

app.use((err, req, res, next) => {
  console.log(err);
  res.status(400).json({
    error: err.message,
  });
});
