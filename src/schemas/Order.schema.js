/**
 * @openapi
 * components:
 *  schemas:
 *    Order:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          default: "f056aab7-df93-4262-b563-e2d9068b0a3b"
 *        status:
 *          type: string
 *          default: "BOOKED"
 *        customer_id:
 *          type: string
 *          default: "f089594c-93ba-4270-a608-905c822ff9a3"
 *        address:
 *          type: string
 *          default: "bratyev kashirinix 129"
 *        description:
 *          type: string
 *          default: "grand hotel"
 *    ReqOrder:
 *      type: object
 *      required:
 *        - address
 *        - description
 *      properties:
 *        address:
 *          type: string
 *          default: "bratyev kashirinix 129"
 *        description:
 *          type: string
 *          default: "grand hotel"
 *    ReqCreateOrder:
 *      type: object
 *      required:
 *        - customer
 *        - order
 *      properties:
 *        customer:
 *          type: ReqCustomer
 *          $ref: '#/components/schemas/ReqCustomer'
 *        order:
 *          type: ReqOrder
 *          $ref: '#/components/schemas/ReqOrder'
 *    ReqOrderGetAway:
 *      type: object
 *      properties:
 *        passport:
 *          type: string
 *        hotel_id:
 *          type: string
 *        room_id:
 *          type: string
 *    ReqChangeStatusOrder:
 *      type: object
 *      required:
 *         - order_id
 *      properties:
 *        order_id:
 *          type: string
 *          default: "6fe69112-76e2-45db-b058-bec4f0e2927c"
 */