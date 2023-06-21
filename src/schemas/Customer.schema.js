/**
 * @openapi
 * components:
 *  schemas:
 *    ReqCustomer:
 *      type: object
 *      required:
 *        - phone
 *        - first_name
 *        - last_name
 *      properties:
 *        phone:
 *          type: string
 *          default: "89229017721"
 *        first_name:
 *          type: string
 *          default: "danil"
 *        last_name:
 *          type: string
 *          default: "shagiev"
 *    ReqCustomerId:
 *       type: object
 *       required:
 *         - customer_id
 *       properties:
 *         customer_id:
 *           type: string
 *           default: "f089594c-93ba-4270-a608-905c822ff9a3"
 *    Customer:
 *      type: object
 *      properties:
 *        phone:
 *          type: string
 *          default: "89229017721"
 *        first_name:
 *          type: string
 *          default: "danil"
 *        last_name:
 *          type: string
 *          default: "shagiev"
 *        id:
 *          type: string
 *          default: "f089594c-93ba-4270-a608-905c822ff9a3"
 */