import {Router} from "express";
import * as TestController from "../controllers/TestController.js";

const router = Router()

router.get('/get',TestController.test1)
router.post('/post',TestController.test1 )

export default router