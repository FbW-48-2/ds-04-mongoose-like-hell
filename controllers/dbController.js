import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import Student from '../models/Student.js';
import '../connect-db.js'

const app = express()

app.use( express.json())
app.use( cors() ) 
app.use( morgan("dev") ) 


export const getAllStudents = async (req, res) => {
    const students = await Student.find()
    console.log(students)
    res.json( students )
}


export const getStudentById = async (req,res,next) => {
    console.log('inside here', req.params)
    const {id} = req.params
    try {
        const student = await Student.findById(id)
        res.json(student)
    }
    catch(err) {
        next(err)
    }
}

export const newStudent = async (req,res,next) => {
    const data = req.body
    try {
        const newStudent = await Student.create( data )
        res.json( newStudent )  
    }
    catch(err) {
        next(err)
    }
}

export const delStudent = async (req,res,next) => {
    const {id} = req.params
    try {
        const delStudent = await Student.findByIdAndDelete(id)
        res.json( delStudent )  
    }
    catch(err) {
        next(err)
    }
}

export const updateStudent = async (req, res, next) => {
    const {id} = req.params;
    const data = req.body
    try{
        const updateStudent = await Student.findByIdAndUpdate(id, data, {new: true, runValidators: true} ) 
        res.json( updateStudent )

    }
    catch(err){
        next(err)
    }
}

export const updateMany = async (req, res, next) => {
    try{
        // const updateMany = await Student.updateMany({role: undefined}, {role: 'User'},) --> works similar as {role: {$exist: false}}
        const updateMany = await Student.updateMany({role: {$nin: ['User', 'Admin']}}, {role: 'User'},) 
        console.log('the filter works for: ', updateMany.n, ' items')
        res.json( updateMany )

    }
    catch(err){
        next(err)
    }
}