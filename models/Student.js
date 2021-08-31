// TASK 1
// rock the model 😎

import mongoose from 'mongoose'
const { Schema, model } = mongoose

const StudentSchema = new Schema({
    firstname: {type:String, required:true, unique:true},
    lastname: {type:String, required:true},
    favQuote: String,
    isTutor: {type: Boolean, default:false}
}, {
    versionKey: false,
    timestamps: true
});

const Student = model('Student', StudentSchema)

export default Student
