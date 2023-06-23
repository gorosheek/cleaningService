import axios from "axios"

class OrderInfrastructure {
    async goToHotelService(order) {
        let state = "Clean"
        try {
            await axios.put(`http://un1ver5e.keenetic.link:5000/Hotels/room/${state}`,
                {
                    hotelLatitude: order.hotelLatitude,
                    hotelLongitude: order.hotelLongitude,
                    roomNumber: order.roomNumber,
                    state: state,
                    isCleaningRequested: true
                })
            return true
        } catch (error) {
            if (error.response) {
                console.log("data",error.response.message);
                console.log("status",error.response.status);
            }
            return false
        }
    }
}

export default new OrderInfrastructure()