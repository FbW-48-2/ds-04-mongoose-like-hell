import express from 'express'
import Student from  './studentSchema.js'
import morgan from 'morgan'
import cors from 'cors'
import './db-connect.js'

// establish connection to database

const app = express()


//middlewares
app.use( express.json())
app.use(cors())
app.use(morgan("dev"))

// routes 

// get all students
app.get("/students", async(req, res) =>{
  const students = await Student.find()
  console.log(students)
  res.json(students)
})

// get a student
app.get("/students/:id", async(req, res, next) => {
   
    try {
        const {id} = req.params
        const student = await Student.findById(id)
        res.json(student)
    } catch(err){
        next(err)
    }
})

// create
app.post("/students", async(req, res, next) =>{
    
    try{
        const body = req.body
        const newStudent = await Student.create(body)
        res.json(newStudent)
    } catch(err){
        next(err)
    }
})

// delete
app.delete("/students/:id", async(req, res, next) => {
    try{
        const {id} = req.params
        const student = await Student.findByIdAndDelete(id)
        res.json(student)
    } catch(err){
        next(err)
    }
    
})

// update

app.put("/students/:id", async(req, res) => {
    try{ const {id} = req.params
    const studentData = req.body
    const studentUpdated = await Student.findByIdAndUpdate(id, studentData)
    res.json(studentUpdated)
    } catch(err){
        next(err)
    }
})

// updateMany

app.put("/students", async(req, res) =>{
    const updateRole = await Student.updateMany().exists('role', false).set('role', 'user')
    res.json(updateRole)
})

// handle all errors

app.use((err, req, res, next) => {
    console.log(err)
    res.status(400).json({
        error : err.message
    })
})


const PORT =5000
app.listen(PORT, () => console.log(`API started http://localhost${PORT}`))