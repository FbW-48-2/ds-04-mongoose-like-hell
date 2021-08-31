import mongoose from 'mongoose'
import dotenv from 'dotenv'

// task #1
dotenv.config()
const MONGO_URI = process.env.MONGO_URI

mongoose.connect( MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connection works, bro!'))
.catch(err => console.log('[ERROR]', err))