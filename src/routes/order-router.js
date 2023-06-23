import {Router} from "express";
import OrderController from "../controllers/order-controller.js"
import {OrderValidator, RoomValidator} from "../validators/room-validator.js"

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
 *               $ref: '#/components/schemas/ResHotelOrder'
 */
router.post("/gatewayOrder", RoomValidator.isCorrectRoom(), OrderController.createGatewayOrder)
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
 *               $ref: '#/components/schemas/ResHotelOrder'
 */
router.post("/hotelOrder", RoomValidator.isCorrectRoom(), OrderController.createHotelServiceOrder)
/**
 * @openapi
 * '/cleanRoom':
 *  patch:
 *     tags:
 *     - Room
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
 *               $ref: '#/components/schemas/ResHotelOrder'
 */
router.patch("/cleanRoom", OrderValidator.isUuid(), OrderController.changeStatusToCompleted)
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