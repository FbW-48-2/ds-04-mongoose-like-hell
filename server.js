import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Student from "./models/Students.js";

const app = express();

dotenv.config();

// * MIDDLEWARE * //
app.use(express.json());
app.use(cors());


// * MONGOOSE CONNECTION * //
const MONGO_URI = process.env.mongo;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
.then(()=>console.log("connected, yay!"))
.catch((err)=>console.log("not connected, meh!", err.message))


// * ROUTES * //
app.get("/", (req, res)=>{
  res.send(`
  <h1>🔥 Mongoose 🔥 Like 🔥 Hell 🔥</h1>
  <a href="/students">/students</a>
  `)
})

app.get("/migration", async(req,res)=>{
  const result = await Student.updateMany(
    {role:{$exists: false}},
    {$set:{role: "User"}},
    {}
  )
  res.json(result);
})

app.get("/students", async(req, res, next)=>{
  const body = req.body;
  console.log(body);
  try {
    const students = await Student.find();
    res.json(students)
  } catch (err) {
    next(err)
  }
})

app.get("/students/:id", async(req, res, next)=>{
  const {id} = req.params;
  console.log(id);
  try {
    const student = await Student.findById(id);
    res.json(student)
  } catch (err) {
    next(err)
  }
})

app.post("/students", async(req, res, next)=>{
  const body = req.body;
  console.log(body);
  try {
    const newStudent = await Student.create(body);
    res.json(newStudent);
  } catch (err) {
    next(err)
  }
})

app.patch("/students/:id", async(req, res, next)=>{
  const {id} = req.params;
  const body = req.body;
  console.log(id, body);
  try {
    const updatedStudent = await Student.findByIdAndUpdate(id, body, {new:true})
    res.json(updatedStudent);
  } catch (err) {
    next(err)
  }
})

app.delete("/students/:id", async(req, res, next)=>{
  const {id} = req.params;
  console.log(id);
  try {
    const deletedStudent = await Student.findByIdAndDelete(id);
    res.json(deletedStudent);
  } catch (err) {
    next(err)
  }
})


// * ERROR HANDLER* //
app.use((err, req, res, next)=>{
  console.log(err);
  res.status(400).json({
    error: err.message
  })
})


// * LISTEN * //
const PORT = 5002;
app.listen(PORT, ()=>{
  console.log(`API has started on Port http://localhost:${PORT}`);
})