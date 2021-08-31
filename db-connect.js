import mongoose from 'mongoose';

const MONGO_URI = 'mongodb://localhost:27017/students_db';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err));