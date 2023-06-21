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
 *              $ref: '#/components/schemas/CreateOrder'
 *     responses:
 *      200:
 *        description: Success
 */
router.post('/order', OrderController.create)
/**
 * @openapi
 * '/orderGateway':
 *  post:
 *     tags:
 *     - Order
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/OrderGetAway'
 *     responses:
 *      200:
 *        description: Success
 */
router.post('/orderGateway', OrderController.createGatewayOrder)
/**
 * @openapi
 * '/changeStatusToBooked':
 *  post:
 *     tags:
 *     - Order
 *     summary: Change status of order for booked
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/ChangeStatusOrder'
 *     responses:
 *      200:
 *        description: Success
 */
router.post('/changeStatusToBooked', OrderController.changeStatusToBooked)
/**
 * @openapi
 * '/changeStatusToCleanUp':
 *  post:
 *     tags:
 *     - Order
 *     summary: Change status of order for clean up
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/ChangeStatusOrder'
 *     responses:
 *      200:
 *        description: Success
 */
router.post('/changeStatusToCleanUp', OrderController.changeStatusToCleanUp)
/**
 * @openapi
 * '/changeStatusToCompleted':
 *  post:
 *     tags:
 *     - Order
 *     summary: Change status of order for competed
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/ChangeStatusOrder'
 *     responses:
 *      200:
 *        description: Success
 */
router.post('/changeStatusToCompleted', OrderController.changeStatusToCompleted)

export default router