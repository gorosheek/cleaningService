import OrderRepository from "../repository/order-repository.js";
import {Status_Order} from "@prisma/client";

class OrderService{
    // async createOrder(customer, order)  {
    //     const newCustomer = await CustomerService.findCustomer(customer)
    //     console.log(order,newCustomer)
    //     return await OrderRepository.createOrder(order,newCustomer.id)
    // }

    async createOrder(data_order, type){
        const order = {
            x: data_order.longitude,
            y: data_order.latitude,
            room_number: data_order.room_number,
            order_type: type,
            status_type: Status_Order.CLEANING
        }

        return await OrderRepository.createOrderWithType(order)
    }

    async changeStatus(order_id, status){
        return await OrderRepository.updateOrder(order_id, status)
    }
}

export default new OrderService()