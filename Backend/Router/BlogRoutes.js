import express from 'express'
import { addBlog, getAllBlog } from '../Controller/BlogController.js';
import { upload } from '../MiddleWares/Multer.js';


const router = express.Router()

router.post('/add-blog', upload.single('image'), addBlog)
router.get('/get-blogs', getAllBlog)


export default router