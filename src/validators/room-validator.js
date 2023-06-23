import {body} from "express-validator"

export const RoomValidator = {
    isCorrectRoom() {
        return [
            body("latitude").exists().isNumeric(),
            body("longitude").exists().isNumeric(),
            body("room_number").exists().isNumeric()
        ]
    },

}
export const OrderValidator = {
    isUuid(){
        return body("order_id").exists().isUUID()
    }
}