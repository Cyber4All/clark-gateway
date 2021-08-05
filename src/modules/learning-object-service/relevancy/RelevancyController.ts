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
    router.patch('/users/:username/learning-objects/:id/relevancy-check', this.proxyRequest((req: Request) => `/users/${encodeURIComponent(req.params.username)}/learning-objects/${encodeURIComponent(req.params.cuid)}/versions`));

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