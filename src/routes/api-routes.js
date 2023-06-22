import {Router} from "express"
import order from './order-router.js'

const router = Router()

router.use(order)

export default router