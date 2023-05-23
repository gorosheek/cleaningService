import {PrismaClient, Status_Order} from '@prisma/client'

const prisma = new PrismaClient()

class OrderRepository{
    async createOrder(order, customer_id) {
        return prisma.order.create({
            data: {
                status: Status_Order.BOOKED,
                customer_id: customer_id,
                address: order.address,
                description: order.description
            }
        })
    }
}
export default new OrderRepository()