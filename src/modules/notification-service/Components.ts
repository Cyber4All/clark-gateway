/**
 * @swagger
 * components:
 *      schemas:
 *          Notification:
 *              properties:
 *                  id:
 *                      type: string
 *                      description: The id of the notification
 *                      example: 000000000000000000000000
 *                      required: true
 *                  text:
 *                      type: string
 *                      description: The description of the notification
 *                      example: This is an example
 *                      required: true
 *                  timestamp:
 *                      type: string
 *                      description: The timestamp for when the notification was created
 *                      example: 0
 *                      required: true
 *                  link:
 *                      type: string
 *                      description: The link to the object
 *                      example: https://clark.center/details/jdoe1/00000000-1111-2222-3333-444444444444
 *                      required: true
 *                  attributes:
 *                      type: object
 *                      required: true
 *                      additionalProperties:
 *                          type: string
 *          NotificationPayload:
 *              properties:
 *                  username:
 *                      type: string
 *                      description: The requester's username
 *                      example: jdoe1
 *                      required: true
 *                  author:
 *                      type: string
 *                      description: The learning object author's username
 *                      example: jdoe1
 *                      required: true
 *                  learningObjectName:
 *                      type: string
 *                      description: The name of the learning object updated
 *                      example: This is a learning object
 *                      required: true
 *                  version:
 *                      type: number
 *                      description: The version number of the object
 *                      example: 0
 *                      required: true
 *                  cuid:
 *                      type: string
 *                      required: true
 *                      description: The cuid of the learning object
 *                      example: aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee
 *                  authorID:
 *                      type: string
 *                      required: true
 *                      description: The learning object author's id
 *                      example: 000000000000000000000000
 */
