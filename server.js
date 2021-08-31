import mongoose from "mongoose";
import express from "express";

//initializing middleware - express here

const app = express();

//connection to mongoDB using mongoose

const MONGO_URI =
  "mongodb+srv://new_use_1:7qQHu6lDWhWj3Me9@cluster0.ft5sz.mongodb.net/students_db?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection successful!"))
  .catch((err) => console.log("Connection sucks!!"), err);
