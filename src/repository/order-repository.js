import {PrismaClient, Status_Order} from '@prisma/client'
import {CustomerDTO, OrderDTO, ResponseOrderDTO} from "../dtos/models.js";

const prisma = new PrismaClient()

class OrderRepository {
    // async createOrder(order, customer_id) {
    //     const map = await prisma.order.create({
    //         data: {
    //             status: Status_Order.BOOKED,
    //             customer_id: customer_id,
    //             address: order.address,
    //             description: order.description
    //         }
    //     })
    //     if (!map) {
    //         return map
    //     } else {
    //         return new OrderDTO(map)
    //     }
    // }

    //добавление нового заказа + тип enum Order_Type{
    //FULL,
    //TECHNICAL
    //}
    //TODO доделать
    async createOrderWithType(order, order_type) {
        const map = await prisma.order.create({
            data: {
                status: Status_Order.BOOKED,
                room_number: order.room_number,
                x: order.x,
                y: order.y,
                order_type: {order_type}
            }
        })
        // if(!map) {
        //     return map
        // }
        // else{
        //     return new OrderDTO(map)
        // }
    }

    async createOrder(data_order) {
        const map = await prisma.order.create({
            data: {
                x: data_order.longitude,
                y: data_order.latitude,
                room_number: data_order.room_number,
                order_type: data_order.order_type,
                status_type: data_order.status_type
            }
        })

        return new ResponseOrderDTO(map)
    }

    async updateOrder(order_id, status) {
        const map = await prisma.order.update({
            where: {id: order_id},
            data: {
                status: status
            }
        })

        return new OrderDTO(map)
    }

    async getAllOrders(){
        return await prisma.order.findMany()
    }
}

export default new OrderRepository()