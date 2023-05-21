import OrderService from "../services/order-service.js";

class OrderController{
    async create(req, res ) {
        try{
            const {customer, order} = req.body
            const orderInfo = await OrderService.createOrder(customer, order)

            res.status(200).json(orderInfo)
        }
        catch (e){
            console.log(e)
            res.status(500).json(e)
        }

    }

}

export default new OrderController()