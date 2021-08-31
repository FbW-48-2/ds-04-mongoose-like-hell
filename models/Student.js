import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true},
    lastname: { type: String, required: true },
    favQuote: String,
    isTutor: { type: Boolean, default: false },
    role: { type: String, enum: ['User', 'Admin'], default: 'User'},
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Student = mongoose.model('Student', StudentSchema);

export default Student;