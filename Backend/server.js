import express from 'express';
import cors from 'cors';
import connectDB from './Config/Database.js';
import userRoutes from './Router/UserRoutes.js';
import blogRoutes from './Router/BlogRoutes.js';
import categoryRoutes from './Router/CategoryRoutes.js';
import adminRoutes from './Router/AdminRoutes.js';
import requestRoutes from './Router/RequestRoutes.js';

let app = express();
connectDB();

app.use(express.json());
app.use(cors({
    origin: process.env.FrontEnd_URL,
    credentials: true
}));

// accept form data
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/api/user', userRoutes)
app.use('/api/blog', blogRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/request', requestRoutes)


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})