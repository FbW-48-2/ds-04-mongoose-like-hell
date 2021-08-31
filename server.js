//connection to mongoDB using mongoose

import mongoose from "mongoose";
import { string } from "prop-types";

const MONGO_URI =
  "mongodb+srv://new_use_1:7qQHu6lDWhWj3Me9@cluster0.ft5sz.mongodb.net/students_db?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection successful!"))
  .catch((err) => console.log("Connection sucks!!"), err);

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
