import {PrismaClient} from '@prisma/client'
import {CustomerDTO} from "../dtos/models.js";

const prisma = new PrismaClient()

class CustomerRepository{
    async findCustomerByPhone(phone){
        const map = await prisma.customer.findUnique({where: {phone: phone}})
        if(!map) {
            return map
        }
        else{
            return new CustomerDTO(map)
        }
    }

    async createCustomer(data){
        const map = await prisma.customer.create({
            data: {
                phone: data.phone,
                first_name: data.first_name,
                last_name: data.last_name,
            }
        })
        if(!map) {
            return map
        }
        else{
            return new CustomerDTO(map)
        }
    }
}
export default new CustomerRepository()
