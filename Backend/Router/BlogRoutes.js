import express from 'express'
import { addBlog } from '../Controller/BlogController.js';
import {upload} from '../MiddleWares/Multer.js';


const router = express.Router()

router.post('/add-blog',upload.single('image'),addBlog)


export default router