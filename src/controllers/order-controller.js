import OrderService from "../services/order-service.js";
import {Status_Order, Order_Type} from "@prisma/client";

class OrderController{

    async createGatewayOrder(req, res){
        try{
            const order = req.body
            const orderInfo = await OrderService.createOrder(order, Order_Type.TECHNICAL, true)

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
            const orderInfo = await OrderService.createOrder(order, Order_Type.FULL, false)

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

    async getAllOrders(req, res){
        try{
            const allOrders = await OrderService.getAllOrders()
            res.status(200).json(allOrders)
        }
        catch(e){
            console.log(e)
            res.status(500).json(e)
        }
    }

}

export default new OrderController()