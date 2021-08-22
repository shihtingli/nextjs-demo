import mongoose from 'mongoose'
 
const url = process.env.mongodburl || 'mongodb://localhost:27017/next'
 
const establishConnection = () => {
  if (!process.env.JEST_WORKER_ID && mongoose.connection.readyState === 0) {
      debugger;
      console.log(process.env.mongodburl)
    mongoose.connect(
      url,
      { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
      (err) => {
        if (!err) console.log('MongoDB connection successful.')
        else console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2))
      }
    )
  }
}
 
export { establishConnection }