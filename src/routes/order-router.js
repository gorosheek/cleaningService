import { Router } from "express";
import OrderController from "../controllers/order-controller.js"


const router = Router()

router.post('/order', OrderController.create)
router.post('/changeStatusToBooked', OrderController.changeStatusToBooked)

export default router