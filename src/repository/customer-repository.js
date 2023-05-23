import {PrismaClient} from '@prisma/client'
import {CustomerDTO} from "../dtos/models.js";

const prisma = new PrismaClient()

class CustomerRepository{
    async findCustomerByPhone(phone) : CustomerDTO{
        return prisma.customer.findUnique({where: {phone: phone}})
    }

    async createCustomer(data) : CustomerDTO {
        return prisma.customer.create({
            data: {
                phone: data.phone,
                first_name: data.first_name,
                last_name: data.last_name,
            }
        })
    }
}
export default new CustomerRepository()
