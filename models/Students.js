import mongoose from "mongoose";
const {Schema, model} = mongoose;

const studentsSchema = new Schema({
  firstname: {type: String, required: true},
  lastname: {type: String, required: true},
  favQuote: {type: String},
  isTutor: {type: Boolean, default:false},
  role: {type: String, enum:["User", "Admin"], default:"User"} 
},
{
  versionKey: false,
  timestamps:true
})

const Student = model("Student", studentsSchema);
export default Student;