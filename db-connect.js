import mongoose from 'mongoose';

 

//const Mongo_URL = "mongodb://localhost/users_db";
const Mongo_URL = "mongodb+srv://shinhee:*******@shinhee.fglsw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(Mongo_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log("up & running, Shinhee!"))
.catch((err)=> console.log("connection failed", err.message));