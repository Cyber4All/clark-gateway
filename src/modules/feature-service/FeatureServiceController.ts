import { Request, Router } from "express";
import proxy = require("express-http-proxy");
import { Controller } from "../../interfaces/Controller";

const FEATURED_API = process.env.FEATURED_API || "localhost:3002";

export class FeatureServiceController implements Controller {
    buildRouter(): Router {
        const router = Router();

        /**
         * @swagger
         * /featured/learning-objects:
         *  get:
         *      description: Gets a list of featured objects
         *      tags:
         *          - Feature Service
         *      responses:
         *          200:
         *              description: OK
         *              content:
         *                  application/json:
         *                      schema:
         *                          type: array
         *                          items:
         *                              $ref: '#/components/schemas/LearningObject'
         */
        router.route("/featured/learning-objects").get(this.proxyRequest((req: Request) => "/featured/learning-objects"));

        /**
         * @swagger
         * /featured/learning-objects:
         *  patch:
         *      description: Updates the list of featured objects
         *      tags:
         *          - Feature Service
         *      requestBody:
         *          description: The cuid, version, and author's username
         *          required: true
         *          content:
         *              application/json:
         *                  schema:
         *                      type: array
         *                      items:
         *                          $ref: '#/components/schemas/LearningObject'
         *      responses:
         *          201:
         *              description: CREATED
         *              content:
         *                  application/json:
         *                      schema:
         *                          type: object
         *                          properties:
         *                              message:
         *                                  type: string
         *                                  example: Learning Objects Updated
         *          401:
         *              description: UNAUTHENTICATED - User not logged in
         *          403:
         *              description: UNAUTHORIZED - User does not have privilege to update featured objects
         */
        router.route("/featured/learning-objects").patch(this.proxyRequest((req: Request) => "/featured/learning-objects"));

        /**
         * @swagger
         * /featured/learning-objects/:collection:
         *  get:
         *      description: Gets the list of featured learning objects for a collection
         *      tags:
         *          - Feature Service
         *      responses:
         *          200:
         *              description: CREATED
         *              content:
         *                  application/json:
         *                      schema:
         *                          type: array
         *                          items:
         *                              $ref: '#/components/schemas/LearningObject'
         *          400:
         *              description: BAD REQUEST - At least one of the learning objects is not from the desired featured collection
         *          404:
         *              description: NOT FOUND - The desired collection does not exist
         */
        router.route("/featured/learning-objects/:collection").get(this.proxyRequest((req: Request) => `/featured/learning-objects/${encodeURIComponent(req.params.collection)}`));
        return router;
    }

    private proxyRequest(callback: any) {
        return proxy(FEATURED_API, {
            proxyReqPathResolver: req => {
                return callback(req);
            },
        });
    }
}