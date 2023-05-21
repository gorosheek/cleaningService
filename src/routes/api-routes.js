import {Router} from "express"
import test from './test-router.js'
import customer from './customer-router.js'

const router = Router()

router.use(test)
router.use(customer)

export default router