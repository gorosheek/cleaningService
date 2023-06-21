import { Router } from "express";
import CustomerController from "../controllers/customer-controller.js"


const router = Router()
/**
 * @openapi
 * '/createCustomer':
 *  post:
 *     tags:
 *     - Customer
 *     summary: create new customer
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/ReqCustomer'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 */
router.post('/createCustomer', CustomerController.create)
/**
 * @openapi
 * '/customers':
 *  get:
 *     tags:
 *     - Customer
 *     summary: get all customers
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                  $ref: '#/components/schemas/Customer'
 */
router.get('/customers', CustomerController.getAll)
/**
 * @openapi
 * '/customer_id':
 *  post:
 *     tags:
 *     - Customer
 *     summary: get customer by id
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/ReqCustomerId'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Customer'
 */
router.post('/customer_id', CustomerController.getById)


export default router
