import { Router } from "express";
import OrderController from "../controllers/order-controller.js"


const router = Router()

router.post('/order', OrderController.create)
router.post('/orderGateway', OrderController.createGatewayOrder)
router.post('/changeStatusToBooked', OrderController.changeStatusToBooked)
router.post('/changeStatusToCleanUp', OrderController.changeStatusToCleanUp)
router.post('/changeStatusToCompleted', OrderController.changeStatusToCompleted)

export default router