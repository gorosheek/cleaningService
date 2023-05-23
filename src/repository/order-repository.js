import {PrismaClient, Status_Order} from '@prisma/client'
import {CustomerDTO, OrderDTO} from "../dtos/models.js";

const prisma = new PrismaClient()

class OrderRepository{
    async createOrder(order, customer_id) {
        const map = await prisma.order.create({
            data: {
                status: Status_Order.BOOKED,
                customer_id: customer_id,
                address: order.address,
                description: order.description
            }
        })
        if(!map) {
            return map
        }
        else{
            return new OrderDTO(map)
        }
    }
}
export default new OrderRepository()