import {PrismaClient, Status_Order} from '@prisma/client'
import {CustomerDTO, OrderDTO, ResponseOrderDTO} from "../dtos/models.js";

const prisma = new PrismaClient()

class OrderRepository {

    async createOrder(data_order) {
        const map = await prisma.order.create({
            data: {
                x: data_order.x,
                y: data_order.y,
                room_number: data_order.room_number,
                order_type: data_order.order_type,
                status: data_order.status_type,
                isCleaningRequested: data_order.isCleaningRequested
            }
        })
        console.log(map)
        return new ResponseOrderDTO(map)
    }

    async updateOrder(order_id, status) {
        const map = await prisma.order.update({
            where: {id: order_id},
            data: {
                status: status
            }
        })
        console.log(status)
        console.log(map)
        return new ResponseOrderDTO(map)
    }

    async getAllOrders(){
        return await prisma.order.findMany()
    }
    
    async findOrderById(id){        
        return await prisma.order.findFirst({
            where:{id: id}
        })
    }
}

export default new OrderRepository()