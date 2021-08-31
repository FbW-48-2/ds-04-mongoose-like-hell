// TASK 2
import express from 'express'
import Student from './models/Student.js'
import './db_connect.js'
import createError from 'http-errors'

const app = express()

app.use(express.json())

app.get("/", (req, res)=> {
    res.send(`<h1>Hello from Students API</h1>
    <a href="/students">/users</a>`)
})

app.get("/students", async (req, res)=> {
    const students = await Student.find() 
    res.json(students)
})

app.get("/students/:id", async (req, res, next) => {
    const {id} = req.params
    console.log(id);
    try {
        const student = await Student.findById(id)
        if(!student){
            throw new createError(
                400,
                "This ID doesn't exist"
            )
        }
        res.json(student)
    } 
    catch (err) {
        next(err)
    }
})

app.post("/students", async (req, res, next)=> {
    console.log(req.body);
    try {
        const newStudent = await Student.create(req.body)
        res.json(newStudent)
    } 
    catch (err) {
        next(err)
    }
})

app.patch("/students/:id", async (req, res, next)=> {
    const { id } = req.params;
    console.log(id);
    const studentData = req.body
    console.log(studentData);
    try {
        const studentUpdated = await Student.findByIdAndUpdate(
            id, 
            studentData,
            { new: true }
            )
            if(!studentUpdated){
                throw new createError(
                    400,
                    "Again 🤦🏽 This ID doesn't exist"
                )
            }
        res.json(studentUpdated) 
    } 
    catch (err) {
        next(err)
    }
})

app.delete("/students/:id", async (req, res, next) => {
    const { id } = req.params;
    console.log(id);
    try {
        const studentDeleted = await Student.findByIdAndDelete(id)
        if(!studentDeleted){
            throw new createError(
                400,
                "Schon wieder 💢 This ID doesn't exist"
            )
        }
        res.json(studentDeleted)
    } 
    catch (err) {
        next(err)    
    }
})

app.use( function errorHandler(err, req, res, next) {
    res.status(err.status || 400).send({
        error:{
            message: err.message,
            status: err.status
        }
    })
} )


const PORT = 5000;
app.listen(PORT, ()=> {
    console.log(`API running in port: http://localhost:${PORT}`);
})
