import express from 'express'
import { loginAdmin } from '../Controller/AdminController';



const router = express.Router()

router.post('/admin-login',loginAdmin);


export default router