/**
 * address: order.address,
 *                 description: order.description
 * @openapi
 * components:
 *  schemas:
 *    CreateOrder:
 *      type: object
 *      required:
 *        - customer
 *        - order
 *      properties:
 *        customer:
 *          type: object
 *          default: {phone: 1,first_name: "oleg",last_name: "babin"}
 *        order:
 *          type: object
 *          default: {address: "братьев кашириных 129", description: "grand hotel"}
 *    OrderGetAway:
 *      type: object
 *      properties:
 *        passport:
 *          type: string
 *        hotel_id:
 *          type: string
 *        room_id:
 *          type: string
 *    ChangeStatusOrder:
 *      type: object
 *      required:
 *         - order_id
 *      properties:
 *        order_id:
 *          type: string
 *          default: "2121fwaf2"
 */