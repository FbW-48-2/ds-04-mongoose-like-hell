import mongoose from 'mongoose';
const { Schema, model } = mongoose;


// SCHEMA ----------------------------------------------
const StudentSchema = new Schema({
    firstname: { type: String, required: true},
    lastname: { type: String, required: true},
    favQuote: { type: String, required: false},
    isTutor: { type: Boolean, required: false, default: false}
},
{
    versionKey: false,
    timestamps: true
})
// -----------------------------------------------------



// MODEL -----------------------------------------------
const Student = model("Student", StudentSchema)

export default Student;
// -----------------------------------------------------