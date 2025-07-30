import express from 'express'
import { loginAdmin } from '../Controller/AdminController.js';



const router = express.Router()

router.post('/admin-login',loginAdmin);


export default router