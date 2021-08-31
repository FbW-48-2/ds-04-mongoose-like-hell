// MONGOOSE --------------------------------------------
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const { connect } = mongoose;


// DATABASE CONNECTION ---------------------------------
    // Grab environment key
    dotenv.config();
    const MONGO_URI = process.env.MONGO_URI;

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