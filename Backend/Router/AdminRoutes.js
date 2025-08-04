import express from 'express'
import { changePassword, getAdmin, loginAdmin, updateProfile } from '../Controller/AdminController.js';



const router = express.Router()

router.post('/admin-login',loginAdmin);
router.get('/admin-Profile',getAdmin)
router.put('/change-password',changePassword);
router.put('/update-profile',updateProfile);


export default router