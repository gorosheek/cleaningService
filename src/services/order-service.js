import CustomerService from "./customer-service.js";
import OrderRepository from "../repository/order-repository.js";

class OrderService{
    async createOrder(customer, order)  {
        const newCustomer = await CustomerService.findCustomer(customer)
        console.log(order,newCustomer)
        return await OrderRepository.createOrder(order,newCustomer.id)
    }

    async changeStatus(order_id, status){
        return await OrderRepository.updateOrder(order_id, status)
    }
}

export default new OrderService()