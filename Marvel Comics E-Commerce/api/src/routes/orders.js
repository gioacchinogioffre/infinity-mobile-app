import { Router } from "express";
const router = Router()
import {postOrder, getOrders} from '../controllers/orders.controllers';
router.post('/',postOrder)
router.get('/', getOrders)

export default router