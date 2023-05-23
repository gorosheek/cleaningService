import CustomerRepository from "../repository/customer-repository.js";


class CustomerService{
    async findCustomer(customer){
        const newCustomer = await CustomerRepository.findCustomerByPhone(customer.phone)
        if(newCustomer)
            return newCustomer
        else
            return await this.createCustomer(customer)
    }

    async createCustomer(customer){
        return await CustomerRepository.createCustomer(customer);
    }
}

export default new CustomerService()