import {Router} from "express";
import OrderController from "../controllers/order-controller.js"


const router = Router()

/**
 * @openapi
 * '/order':
 *  post:
 *     tags:
 *     - Order
 *     summary: Create new Order
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/ReqCreateOrder'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 */

/**
 * @openapi
 * '/orders':
 *  get:
 *     tags:
 *     - Order
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 */
router.get('/orders', OrderController.getAllOrders)

export default router