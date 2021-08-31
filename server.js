import mongoose from 'mongoose';
const { connect } = mongoose;


// DATABASE CONNECTION ---------------------------------
const MONGO_URI = "mongodb+srv://Jon19:Jon19@db-intro.odc0h.mongodb.net/students_db?retryWrites=true&w=majority";

connect( MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => {
    console.log("CONNECTION SUCCESSFUL");
})
.catch((err) => {
    console.log("CONNECTION FAILED -->", err.message);
})
// -----------------------------------------------------
