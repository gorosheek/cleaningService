import {Router} from "express";
import OrderController from "../controllers/order-controller.js"


const router = Router()

/**
 * @openapi
 * '/gatewayOrder':
 *  post:
 *     tags:
 *     - Order
 *     summary: Create new Order for Gateway
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/ReqOrderGetAway'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 */
router.post("/gatewayOrder",OrderController.createGatewayOrder)
/**
 * @openapi
 * '/hotelOrder':
 *  post:
 *     tags:
 *     - Order
 *     summary: Create new Order for Hotel service
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/ReqOrderGetAway'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 */
router.post("/hotelOrder",OrderController.createHotelServiceOrder)
/**
 * @openapi
 * '/hotelOrder':
 *  patch:
 *     tags:
 *     - Order
 *     summary: Change order status to complete
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/ReqChangeStatusOrder'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 */
router.patch("/hotelOrder",OrderController.changeStatusToCompleted)
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
 *                type: array
 *                items:
 *                    $ref: '#/components/schemas/Order'
 */
router.get('/orders', OrderController.getAllOrders)

export default router