import express from 'express';
import cors from 'cors';
import connectDB from './Config/Database.js';
import blogRoutes from './Router/BlogRoutes.js';
import categoryRoutes from './Router/CategoryRoutes.js';
import adminRoutes from './Router/AdminRoutes.js';
import requestRoutes from './Router/RequestRoutes.js';
import path from 'path';
import dashboardRoutes from './Router/DashboardRoutes.js';

let app = express();
connectDB();

app.use(express.json());

// Fixed CORS configuration - remove trailing slash from origin
app.use(cors({
    origin:`${process.env.FrontEnd_URL}`,
    withCredentials: true,
    credentials: true,
    accessControlAllowCredentials: true
}));

// accept form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// for multer
app.use(express.static(path.join(path.resolve(), 'public/uploads')));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/blog', blogRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/request', requestRoutes);
app.use('/api/dashboard/', dashboardRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});