import OrderService from "../services/order-service.js";
import {Status_Order} from "@prisma/client";

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

    async changeStatusToBooked(req, res){
        try{
            const {order_id} = req.body
            //TODO
            const status = Status_Order.BOOKED
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