import mongoose from 'mongoose'
const MONGO_URI = "mongodb://localhost/exercise_db";
mongoose.connect(MONGO_URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex:true
})
.then(() => console.log('connected'))
.catch(() => console.log('failed, err.message'))