import express from 'express'
import { addCategory, getCategory ,categoryById,deleteCategory,updateCategory} from '../Controller/CategoryController.js';



const router = express.Router()

router.post('/add-category',addCategory)
router.get('/get-category',getCategory)
router.get('/get-category/:id',categoryById)
router.delete('/delete-category/:id',deleteCategory)
router.put('/update-category/:id',updateCategory)

export default router