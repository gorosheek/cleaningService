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
 *          default: "CLEANING"
 *        room_number:
 *          type: number
 *          default: 101
 *        x:
 *          type: number
 *          default: 10
 *        y:
 *          type: number
 *          default: 10
 *        order_type:
 *          type: string
 *          default: Full
 *        isCleaningRequested:
 *          type: bool
 *          default: true
 *    ReqOrderGetAway:
 *      type: object
 *      required:
 *         - latitude
 *         - longitude
 *         - room_number
 *      properties:
 *        latitude:
 *          type: number
 *          default: 10
 *        longitude:
 *          type: number
 *          default: 10
 *        room_number:
 *          type: number
 *          default: 101
 *    ReqChangeStatusOrder:
 *      type: object
 *      required:
 *         - order_id
 *      properties:
 *        order_id:
 *          type: string
 *          default: "6fe69112-76e2-45db-b058-bec4f0e2927c"
 */