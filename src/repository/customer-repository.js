import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

class CustomerRepository{
    async findCustomerByPhone(phone){
        return prisma.customer.findUnique({where: {phone: phone}})
    }

    async createCustomer(data) {
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
