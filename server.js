import "./db-connect.js";
import Student from "./models/Student.js";
import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", async (req, res) => {
  res.send(`
    <h1>Welcome to the Student API</h1>
    <a href="/students">/students</a>
  `);
});

// * GET /students (=> get all students)

app.get("/students", async (req, res, next) => {
  try {
    const users = await Student.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

// * GET /students/:id (=> get single student by ID)

app.get("/students/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  try {
    const user = await Student.findById(id);
    res.json(user);
  } catch (error) {
      next(error);
  }
});

// * POST /students (=> create student)

app.post("/students", async (req, res, next) => {
  const body = req.body;
  console.log(body);
  try {
    const studentNew = await Student.create(body);
    res.json(studentNew);
  } catch (error) {
      next(error);
  }
});

// * PATCH /students/:id (=> update student with given ID)
app.patch("/students/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log("[id]", id, "[body]", body);
  const body = req.body;
  try {
    const studentUpdate = await Student.findByIdAndUpdate(id, body, {
      new: true,
    });
    res.json(studentUpdate);
  } catch (error) {
    next(error);
  }
});

// * DELETE /students/:id (=> remove student with given ID)
app.delete("/students/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  try {
    const studentDelete = await Student.findByIdAndDelete(id);
    res.json(studentDelete);
  } catch (error) {
      next(error)
  }
});

// * Create a new GET route /migration

app.get("/migration", async (req, res, next) => {
    try {
      const result = await Student.updateMany(
        { role: { $exists: false } },
        { $set: { role: "User" } }
      );
      res.json(result);
    } catch (error) {
      next(error);
    }
})


app.listen(PORT, () => {
  console.log(`Server is running  http://localhoast:${PORT}`);
});

app.use((err, req, res, next) => {
  console.log(err);
  res.json(err.message);
});
