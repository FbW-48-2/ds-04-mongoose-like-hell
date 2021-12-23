import mongoose from "mongoose";
const { Schema, model } = mongoose;

//creating my schemas here

const StudentSchema = new Schema(
  {
    firstname: { type: String, required: true, unique: true },
    lastname: { type: String, required: true },
    favQuote: { type: String },
    isTutor: { type: Boolean, default: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Student = model("Student", StudentSchema);

export default Student;
