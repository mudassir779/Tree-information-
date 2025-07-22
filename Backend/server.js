import express from 'express';
import cors from 'cors';
import connectDB from './Config/Database.js';

let app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, ()=>{
    connectDB();
    console.log(`Server is running on port ${process.env.PORT}`);
})