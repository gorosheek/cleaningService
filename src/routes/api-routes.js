import {Router} from "express"
import order from './order-router.js'
import customer from './customer-router.js'

const router = Router()


router.use(order)
router.use(customer)

export default router