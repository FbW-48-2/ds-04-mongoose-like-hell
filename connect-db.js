import mongoose from 'mongoose';

const URI = 'mongodb://127.0.0.1:27017/students'

mongoose.connect( URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then( (res, rej) => console.log("Connection with Students works!") )
  .catch(err => console.log("Connection is somehow strange...!", err.message))