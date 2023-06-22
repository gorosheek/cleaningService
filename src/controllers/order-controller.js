import OrderService from "../services/order-service.js";
import {Status_Order, Order_Type} from "@prisma/client";

class OrderController{
    async create(req, res) {
        try{
            const {customer, order} = req.body
            const orderInfo = await OrderService.createOrder(customer, order)

            res.status(200).json(orderInfo)
        }
        catch (e){
            console.log(e)
            res.status(500).json(e)
        }

    }

    async createGatewayOrder(req, res){
        try{
            const order = req.body
            const orderInfo = await OrderService.createOrder(order, Order_Type.TECHNICAL)

            res.status(200).json(orderInfo)
        }
        catch (e){
            console.log(e)
            res.status(500).json(e)
        }
    }

    async createHotelServiceOrder(req, res){
        try{
            const order = req.body
            const orderInfo = await OrderService.createOrder(order, Order_Type.FULL)

            res.status(200).json(orderInfo)
        }
        catch (e){
            console.log(e)
            res.status(500).json(e)
        }
    }

    async changeStatusToBooked(req, res){
        try{
            const {order_id} = req.body
            const status = Status_Order.BOOKED
            const orderInfo = await OrderService.changeStatus(order_id, status)

            res.status(200).json(orderInfo)
        }
        catch (e){
            console.log(e)
            res.status(500).json(e)
        }

    }

    async changeStatusToCleanUp(req, res){
        try{
            const {order_id} = req.body
            const status = Status_Order.CLEAN_UP
            console.log(status)
            const orderInfo = await OrderService.changeStatus(order_id, status)
            console.log(orderInfo)

            res.status(200).json(orderInfo)
        }
        catch (e){
            console.log(e)
            res.status(500).json(e)
        }

    }

    async changeStatusToCompleted(req, res){
        try{
            const {order_id} = req.body
            const status = Status_Order.COMPLETED
            const orderInfo = await OrderService.changeStatus(order_id, status)

            res.status(200).json(orderInfo)
        }
        catch (e){
            console.log(e)
            res.status(500).json(e)
        }

    }

}

export default new OrderController()