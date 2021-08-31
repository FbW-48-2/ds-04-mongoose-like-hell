import express from 'express'
import Student from './models/Student.js'
import './db-connect.js'

// task #2

const app = express()
app.use( express.json() )


// ====== ROUTES ======

// /students
// GET all students
app.get('/students', async (req, res, next) => {
  try {
    const students = await Student.find()
    res.json( students )
  } catch (err) {
    next(err)
  }
})

// GET single student
app.get('/students/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const student = await Student.findById( id )
    console.log( id )  
    res.json( student )
  } catch (err) {
    next(err)
  }
})

// CREATE single student
app.post('/students', async (req, res, next) => {
  try {
    const studentData = req.body
    const newStudent = await Student.create( studentData )
    console.log( studentData )
    res.json( newStudent )
  } catch (err) {
    next(err)
  }
})

// UPDATE single student
app.patch('/students/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const studentData = req.body
    const studentUpdated = await Student.findByIdAndUpdate(
      id,
      studentData,
      { new: true }
    )
    console.log( id )
    console.log( studentUpdated )
    res.json( studentUpdated )
  } catch (err) {
    next(err)
  }
})

// DELETE single student
app.delete('/students/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const studentDeleted = await Student.findByIdAndDelete( id )
    console.log( id )
    res.json( studentDeleted )
  } catch (err) {
    next(err)
  }
})

// task #3 => route /migration
app.get('/migration', async (req, res, next) => {
  try {
    const result = await Student.updateMany(
      {
        role: {
          $exists: false
        }
      },
      {
        $set: {
          role: "User"
        }
      }
    )
    res.json( result )
  } catch (err) {
    next(err)
  }
})

app.use( (err, req, res, next) => {
  console.log(err)
  res.status(400).json({
    error: err.message
  })
} )

const PORT = 5000
app.listen( PORT, () => console.log(`API started up on http://localhost:${PORT}`) )