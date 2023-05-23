import { Router } from "express";
import CustomerController from "../controllers/customer-controller.js"


const router = Router()

router.post('/createCustomer', CustomerController.create)
router.get('/customers', CustomerController.getAll)
router.post('/customer_id', CustomerController.getById)


export default router
