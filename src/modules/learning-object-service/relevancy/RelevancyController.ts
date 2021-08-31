import { Router, Request } from "express";
import proxy = require("express-http-proxy");
import { Controller } from "../../../interfaces/Controller";
import { LEARNING_OBJECT_ROUTES } from "../../../routes";

const LEARNING_OBJECT_SERVICE_URI =
  process.env.LEARNING_OBJECT_SERVICE_URI || 'localhost:5000';

export class RelevancyController implements Controller {
  buildRouter(): Router {
    const router = Router();

    /**
     * @swagger
     * /users/{username}/learning-objects/{id}/relevancy-check:
     *  patch:
     *    description: Updates the nextCheck attribute
     *    tags:
     *      - Learning Object Service
     *    parameters:
     *      - in: path
     *        name: username
     *        schema:
     *          type: string
     *        required: true
     *        description: The learning object's author's username
     *      - in: path
     *        name: id
     *        schema:
     *          type: string
     *        required: true
     *        description: The object id of the learning object
     *    requestBody:
     *      content:
     *        application/json:
     *          schema:
     *            type: object
     *            properties:
     *              year:
     *                type: number
     *                required: true
     *                description: The amount of years from now in the future (1, 2, or 3)
     *                example: 3
     *    responses:
     *      200:
     *        description: OK
     *      400:
     *        description: BAD REQUEST - The year in the body is missing or invalid
     *      401:
     *        description: UNAUTHENTICATED - User not logged in
     *      403:
     *        description: UNAUTHORIZED - User does not have editor or admin privileges
     *      404:
     *        description: NOT FOUND - Learning object not found
     */
    router.patch('/users/:username/learning-objects/:id/relevancy-check', this.proxyRequest((req: Request) => `/users/${encodeURIComponent(req.params.username)}/learning-objects/${encodeURIComponent(req.params.id)}/relevancy-check`));

    /**
     * @swagger
     * /topics:
     *  get:
     *    description: Get a list of topics
     *    tags:
     *      - Learning Object Service
     *    responses:
     *      200:
     *        description: OK
     *        content:
     *          application/json:
     *            schema:
     *              type: array
     *              items:
     *                $ref: '#/components/schemas/Topic'
     */
    router.get('/topics', this.proxyRequest((req: Request) => `/topics`));

    /**
     * @swagger
     * /users/{username}/learning-objects/{id}/learning-outcomes/{outcomeId}/guidelines:
     *  patch:
     *    description: Updates the guidelines attribute
     *    tags:
     *      - Learning Object Service
     *    parameters:
     *      - in: path
     *        name: username
     *        schema:
     *          type: string
     *        required: true
     *        description: The learning object's author's username
     *      - in: path
     *        name: id
     *        schema:
     *          type: string
     *        required: true
     *        description: The object id of the learning object
     *      - in: path
     *        name: outcomeId
     *        schema:
     *          type: string
     *        required: true
     *        description: The id of the outcome being updated
     *    requestBody:
     *      content:
     *        application/json:
     *          schema:
     *            type: object
     *            properties:
     *              guidelines:
     *                type: array
     *                required: true
     *                description: The complete list of guidelines that should belong to an outcome at any given time
     *                example: ["000000000000000000000000"]
     *    responses:
     *      200:
     *        description: OK
     *      400:
     *        description: BAD REQUEST - The guidelines body is empty, or the ids are invalid mongo ids
     *      401:
     *        description: UNAUTHENTICATED - User not logged in
     *      403:
     *        description: UNAUTHORIZED - User does not have editor, admin, or curator privileges
     *      404:
     *        description: NOT FOUND - Learning object not found, Guidelines not found, Outcome not found
     */
    router.patch('/users/:username/learning-objects/:id/learning-outcomes/:outcomeId/guidelines', this.proxyRequest((req: Request) => `/users/${encodeURIComponent(req.params.username)}/learning-objects/${encodeURIComponent(req.params.id)}/learning-outcomes/${encodeURIComponent(req.params.outcomeId)}/guidelines`));

    /**
     * @swagger
     * /users/{username}/learning-objects/{id}/topics:
     *  patch:
     *    description: Updates topics on a object
     *    tags:
     *      - Learning Object Service
     *    parameters:
     *      - in: path
     *        name: username
     *        schema:
     *          type: string
     *        required: true
     *        description: The learning object's author's username
     *      - in: path
     *        name: id
     *        schema:
     *          type: string
     *        required: true
     *        description: The object id of the learning object
     *    requestBody:
     *      content:
     *        application/json:
     *          schema:
     *            type: object
     *            properties:
     *              topicIds:
     *                type: array
     *                items:
     *                  type: string
     *                required: true
     *                description: An array of topic ids
     *    responses:
     *      200:
     *        description: OK
     *      400:
     *        description: BAD REQUEST - Topic ids provided is not a valid id
     *      401:
     *        description: UNAUTHENTICATED - User not logged in
     *      403:
     *        description: UNAUTHORIZED - User does not have editor or admin privileges
     *      404:
     *        description: NOT FOUND - Learning object or topic not found
     */
    router.patch('/users/:username/learning-objects/:id/topics', this.proxyRequest((req: Request) => `/users/${req.params.username}/learning-objects/${req.params.id}/topics`));

    /**
     * @swagger
     * /users/{username}/learning-objects/{id}/topics/{topicId}:
     *  delete:
     *    description: Deletes a topic from a object
     *    tags:
     *      - Learning Object Service
     *    parameters:
     *      - in: path
     *        name: username
     *        schema:
     *          type: string
     *        required: true
     *        description: The learning object's author's username
     *      - in: path
     *        name: id
     *        schema:
     *          type: string
     *        required: true
     *        description: The object id of the learning object
     *      - in: path
     *        name: topicId
     *        schema:
     *          type: string
     *        required: true
     *        description: The id of the topic
     *    responses:
     *      200:
     *        description: OK
     *      400:
     *        description: BAD REQUEST - Topic id provided is not a valid id
     *      401:
     *        description: UNAUTHENTICATED - User not logged in
     *      403:
     *        description: UNAUTHORIZED - User does not have editor or admin privileges
     *      404:
     *        description: NOT FOUND - Learning object or topic not found
     */
    router.delete('/users/:username/learning-objects/:id/topics/:topicId', this.proxyRequest((req: Request) => `/users/${req.params.username}/learning-objects/${req.params.id}/topics/${req.params.topicId}`));

    /**
     * @swagger
     * /learning-objects/evaluators:
     *  post:
     *    description: Assigns evaluators to objects
     *    tags:
     *      - Learning Object Service
     *    requestBody:
     *      content:
     *        application/json:
     *          schema:
     *            type: object
     *            properties:
     *              cuids:
     *                type: array
     *                items:
     *                  type: string
     *                required: true
     *                description: An array of cuids
     *              assignerIds:
     *                type: array
     *                items:
     *                  type: string
     *                required: true
     *                description: An array of user ids
     *    responses:
     *      200:
     *        description: OK
     *      400:
     *        description: BAD REQUEST - Assigner id(s) provided do not have an access group
     *      401:
     *        description: UNAUTHENTICATED - User not logged in
     *      403:
     *        description: UNAUTHORIZED - User does not have curator, editor, or admin privileges
     *      404:
     *        description: NOT FOUND - Learning objects or users were not found
     *      409:
     *        description: CONFLICT - A given user has already been assigned to one or more cuids
     */
    router.post('/learning-objects/evaluators', this.proxyRequest((req: Request) => `/learning-objects/evaluators`));

    /**
     * @swagger
     * /users/{username}/learning-objects/{cuid}/evaluation:
     *  patch:
     *    description: Evaluates a learning object
     *    tags:
     *      - Learning Object Service
     *    parameters:
     *      - in: path
     *        name: username
     *        schema:
     *          type: string
     *        required: true
     *        description: The learning object's author's username
     *      - in: path
     *        name: cuid
     *        schema:
     *          type: string
     *        required: true
     *        description: The cuid of the learning object
     *    responses:
     *      200:
     *        description: OK
     *      401:
     *        description: UNAUTHENTICATED - User not logged in
     *      403:
     *        description: UNAUTHORIZED - User does not have mapper, reviewer, curator, editor, or admin privileges
     *      404:
     *        description: NOT FOUND - Learning object was not found
     */
    router.patch('/users/:username/learning-objects/:cuid/evaluation', this.proxyRequest((req: Request) => `/users/${req.params.username}/learning-objects/${req.params.cuid}/evaluation`));
    
    /**
     * @swagger
     * /learning-objects/evaluators:
     *  patch:
     *    description: Unassigns evaluators to objects
     *    tags:
     *      - Learning Object Service
     *    requestBody:
     *      content:
     *        application/json:
     *          schema:
     *            type: object
     *            properties:
     *              cuids:
     *                type: array
     *                items:
     *                  type: string
     *                required: true
     *                description: An array of cuids
     *              assignerIds:
     *                type: array
     *                items:
     *                  type: string
     *                required: true
     *                description: An array of user ids
     *    responses:
     *      204:
     *        description: NO CONTENT
     *      401:
     *        description: UNAUTHENTICATED - User not logged in
     *      403:
     *        description: UNAUTHORIZED - User does not have curator, editor, or admin privileges
     *      404:
     *        description: NOT FOUND - Learning objects or users were not found
     */
    router.patch('/learning-objects/evaluators', this.proxyRequest((req: Request) => `/learning-objects/evaluators`));

    return router;
  }

  private proxyRequest(callback: Function) {
    return proxy(LEARNING_OBJECT_SERVICE_URI, {
      proxyReqPathResolver: req => {
        return callback(req);
      },
    });
  }
}