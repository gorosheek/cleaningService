import axios from "axios"

class OrderInfrastructure {
    async goToHotelService(order) {
        let state
        if (order.state === "CLEANING")
            state = "CleanRequested"
        else
            state = "Clean"
        //
        // await axios.put('',
        //     {
        //         hotelLatitude: order.hotelLatitude,
        //         hotelLongitude: order.hotelLongitude,
        //         roomNumber: order.roomNumber,
        //         state: state,
        //         isCleaningRequested: order.isCleaningRequested
        //     })

        console.log({
                hotelLatitude: order.hotelLatitude,
                hotelLongitude: order.hotelLongitude,
                roomNumber: order.roomNumber,
                state: state,
                isCleaningRequested: order.isCleaningRequested
            })
    }
}

export default new OrderInfrastructure()