import express from 'express'
import { addRequest, deleteRequest, getRequests } from '../Controller/RequestController.js';
import { upload } from '../Middlewares/Multer.js';

const router = express.Router()

router.post('/add-request', upload.array('Images', 4),addRequest);
router.get('/get-requests', getRequests);
router.delete('/delete-request/:id', deleteRequest);


export default router;