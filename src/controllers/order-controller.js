import OrderService from "../services/order-service.js";
import {Order_Type, Status_Order} from "@prisma/client";
import {validationResult} from "express-validator";

class OrderController {

    async createGatewayOrder(req, res) {

        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const order = req.body
            const orderInfo = await OrderService.createOrderGetAway(order, Order_Type.TECHNICAL)
            if (orderInfo.message) {
                res.status(404).json(orderInfo)
            } else {
                res.status(200).json(orderInfo)
            }
        } catch (e) {
            console.log(e)
            res.status(500).json(e)
        }
    }

    async createHotelServiceOrder(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const order = req.body
            const orderInfo = await OrderService.createOrderHotel(order, Order_Type.FULL)
            if (orderInfo.message) {
                res.status(404).json(orderInfo)
            } else {
                res.status(200).json(orderInfo)
            }
        } catch (e) {
            console.log(e)
            res.status(500).json(e)
        }
    }


    async changeStatusToCompleted(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const {order_id} = req.body
            const status = Status_Order.COMPLETED
            const orderInfo = await OrderService.changeStatus(order_id, status)
            if (orderInfo.message) {
                res.status(400).json(orderInfo)
            } else {
                res.status(200).json(orderInfo)
            }
        } catch (e) {
            console.log(e)
            res.status(500).json(e)
        }
    }

    async getAllOrders(req, res) {
        try {
            const allOrders = await OrderService.getAllOrders()
            res.status(200).json(allOrders)
        } catch (e) {
            console.log(e)
            res.status(500).json(e)
        }
    }

}

export default new OrderController()