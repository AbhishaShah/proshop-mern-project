import express from 'express'
const router = express.Router()
import { addOrderItems, getOrderByID} from '../controllers/OrderControllers.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect, addOrderItems)
router.route('/:id').post(protect, getOrderByID)

export default router   