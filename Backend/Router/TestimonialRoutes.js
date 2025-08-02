import express from 'express'
import { addTestimonials, getTestimonials } from '../Controller/TestimonialController.js';



const router = express.Router()

router.post('/create-Testimonials',addTestimonials)
router.get('/get-testimonials',getTestimonials)



export default router




