import {Router} from "express"
import customer from './customer-router.js'

const router = Router()


router.use(customer)

export default router