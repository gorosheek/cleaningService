import axios from "axios"

class OrderInfrastructure{
    async goToHotelService(order) {
        let state
        if (order.Status_Order === "CLEANING")
            state = "CleanRequested"
        else
            state = "Clean"

        await axios.put('',
            {
            hotelLatitude: order.hotelLatitude,
            hotelLongitude: order.hotelLongitude,
            roomNumber: order.roomNumber,
            state: state,
            isCleaningRequested: true
            })
    }
}

export default new OrderInfrastructure()