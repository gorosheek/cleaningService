import {Router} from "express"
import customer from './order-router.js'

const router = Router()


router.use(customer)

export default router