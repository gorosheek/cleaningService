import {Router} from "express"
import test from './test-router.js'

const router = Router()

router.use(test)

export default router