import mongoose from 'mongoose'
const {Schema, model} = mongoose

const StudentSchema = new Schema({
  firstname : {type : String, required: true},
  lastname : {type : String, required :true},
  favQuote : {type : String},
  isTutor : {type : Boolean, default : false},
  role : {type : String, enum : ['user', 'admin'], default : 'user'}
}, {timestamps : true, versionKey : false})

const Student = model('Student', StudentSchema)

// Student.create({
//     firstname : "Jo",
//     lastname : 'Mi',
//     favQuote : 'Smiles for fun'
// })




export default Student

