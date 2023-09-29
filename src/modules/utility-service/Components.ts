/**
 * @swagger
 * components:
 *      schemas:
 *          Downtime:
 *             properties:
 *                  isDown:
 *                     type: boolean
 *                     description: a boolean that denotes the status for the downtime
 *                     example: true
 *                     required: true
 *          Outage:
 *              properties:
 *                  _id:
 *                      type: ObjectId
 *                      description: identifer used by mongo to find document
 *                      example: ObjectId()
 *                      required: true
 *                  name:
 *                      type: String
 *                      description: name of outage
 *                      example: downloads
 *                      required: true
 *                  accessGroups:
 *                      type: array
 *                      items:
 *                          type: string
 *                          example: editor
 *                      required: true
 *                  issues:
 *                      type: array
 *                      items:
 *                          type: string
 *                          example: Should return a status code of OK when downloading waiting objects as a reviewer in their collection
 *                      required: true
 *                  discovered:
 *                      type: time
 *                      description: timestamp of when outage occured
 *                      example: 2020-02-19T20:31:33.852+00:00
 *                      required: true
 *                  links:
 *                      type: array
 *                      items:
 *                          type: string
 *                          example: https://api-gateway.clark.center/users/skaza/learning-objects/5aa0013becba9a264dcd8030/bundle
 *                      description: links affiliated with the outage
 *                  resolved:
 *                      type: time
 *                      description: timestamp of when outage occured
 *                      example: 2020-02-19T20:45:38.335+00:00
 *                      required: true
 *          Blog:
 *              properties:
 *                  _id:
 *                      type: ObjectId
 *                      description: identifier used by mongo to find document
 *                      example: ObjectId()
 *                      required: true
 *                  name:
 *                      type: string
 *                      description: name of blog
 *                      example: CLARK and CARD SSO
 *                      required: true
 *                  description:
 *                      type: string
 *                      description: description of blog
 *                      example: CLARK and CARD Single-Sign-On has now been deployed and ready for use!
 *                      required: true
 *                  timestamp:
 *                      type: Date
 *                      description: the publish date of the blog
 *                      example: 2022-09-07T00:00:00.000+00:00
 *                      required: true
 *                  url:
 *                      type: string
 *                      description: the URL of the blog
 *                      example: N/A
 *                      required: true
 *
 *
 */
