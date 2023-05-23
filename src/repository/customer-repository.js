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

    async getCustomerById(id){
        const map = await prisma.customer.findUnique({where: {id: id}})
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

    async getAllCustomers(){
        return await prisma.customer.findMany()
    }
}
export default new CustomerRepository()
