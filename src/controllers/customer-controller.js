import CustomerService from "../services/customer-service.js";
import {Status_Order} from "@prisma/client";

class CustomerController {
    async create(req, res) {
        try{
            const {phone, first_name, last_name} = req.body
            const data = {
                "phone": phone,
                "first_name": first_name,
                "last_name": last_name
            }

            const customerInfo = await CustomerService.createCustomer(data)

            res.status(200).json(customerInfo)
        }
        catch (e){
            console.log(e)
            res.status(500).json(e)
        }
    }

    async getById(req, res){
        try{
            const {customer_id} = req.body
            const customerInfo = await CustomerService.getCustomer(customer_id)

            res.status(200).json(customerInfo)
        }
        catch (e){
            console.log(e)
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try{
            const customerInfo = await CustomerService.getAllCustomers()

            res.status(200).json(customerInfo)
        }
        catch (e){
            console.log(e)
            res.status(500).json(e)
        }
    }

}

export default new CustomerController()