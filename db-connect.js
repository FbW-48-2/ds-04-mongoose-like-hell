import mongoose from 'mongoose'

// task #1
const MONGO_URI = 'mongodb+srv://lnferrari:lnferrari@cluster0.zbbq0.mongodb.net/students_db'

mongoose.connect( MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connection works, bro!'))
.catch(err => console.log('[ERROR]', err))