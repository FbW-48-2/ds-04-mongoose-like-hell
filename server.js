import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan'
import Student from './models/Student.js';
import express from 'express';
import './db-connect.js';

const app = express();

app.use(express.json()); //  parses incoming JSON into req.body
app.use(cors()); // allow access to our Api from front end
app.use(morgan("dev")); // logs all my accesses to routes to the terminal

app.get("/students", async (req, res)=> {
    const students = await Student.find()
    res.json(students);

}) 

app.get("/students/migrate", async(req, res)=> {

    const updated = await Student.updateMany().exists("role", false).set("role", "user")

    res.json(updated);
})

app.get('/students/:id', async (req, res, next)=> {
    const {id} = req.params
    try {
        const student = await Student.findById(id)
        res.json(student.firstname)
    } catch(err) {
        next(err)
    }
})

app.post('/students', async (req, res, next)=> {
    try {
        const body = req.body
        const newbie = await Student.create(body)
        res.json(newbie)
    } catch(err) {
        next(err)
    }
})

app.put('/students/:id', async (req, res, next)=> {
    try {
        const {id} = req.params;
        const studentData = req.body;
        const studentUpdated = await Student.findByIdAndUpdate(id, studentData, {new:true});
        res.json(studentUpdated)
    } catch(err) {
        next(err)
    }
})

app.delete("/students/:id", async(req, res, next)=> {
    try {
        const {id} = req.params;
        const studentDeleted = await Student.findByIdAndDelete(id);
        res.json({done: `ID ${id} is deleted`});
    } catch(err) {
        next(err)
    }
})




app.use((err, req, res, next)=> {
    console.log(err)
    res.json({
        error: err.message
    })
})


const PORT = 6000;
app.listen(PORT, ()=> console.log(`API running on http://localhost:${PORT}`));