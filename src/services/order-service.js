import CustomerService from "./customer-service.js";
import OrderRepository from "../repository/order-repository.js";

class OrderService{
    async createOrder(customer, order)  {
        const newCustomer = await CustomerService.findCustomer(customer)
        console.log(order,newCustomer)
        return await OrderRepository.createOrder(order,newCustomer.id)
    }

}

export default new OrderService()