import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log('Database is connected')
    }).catch(err=>{
        console.error('Error while connecting', err)
    })
}
export default connectDB
