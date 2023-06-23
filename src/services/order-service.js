import OrderRepository from "../repository/order-repository.js";
import {Status_Order} from "@prisma/client";
import OrderInfrastructure from "../infrastructure/order-infrastructure.js";
import {ResponseOrderDTO} from "../dtos/models.js";

class OrderService {

    async createOrderHotel(data_order, type) {
        const order = {
            x: data_order.latitude,
            y: data_order.longitude,
            room_number: data_order.room_number,
            order_type: type,
            status_type: Status_Order.CLEANING,
            isCleaningRequested: false
        }
        return await OrderRepository.createOrder(order)
    }

    async createOrderGetAway(data_order, type) {
        const order = {
            x: data_order.latitude,
            y: data_order.longitude,
            room_number: data_order.room_number,
            order_type: type,
            status_type: Status_Order.CLEANING,
            isCleaningRequested: true
        }
        const response = await OrderRepository.createOrder(order)
        const isOk = await OrderInfrastructure.goToHotelService(response)
        if (isOk) {
            return response
        } else {
            return {
                message: "room not found"
            }
        }
    }

    async changeStatus(order_id, status) {
        const response = await OrderRepository.updateOrder(order_id, status)
        const isOk = await OrderInfrastructure.goToHotelService(response)
        if (isOk) {
            return response
        } else {
            return {
                message: "room not found"
            }
        }
    }


    async getAllOrders() {
        return await OrderRepository.getAllOrders()
    }

    async getOrderById(id) {
        return await OrderRepository.getOrderById(id)
    }
}

export default new OrderService()