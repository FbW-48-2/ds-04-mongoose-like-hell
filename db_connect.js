import mongoose from 'mongoose'

const { connect } = mongoose

const MONGO_URI = 'mongodb://localhost/students_db'
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}

connect(MONGO_URI, config).then(() => console.log("success connected")).then(err => console.log(err))

