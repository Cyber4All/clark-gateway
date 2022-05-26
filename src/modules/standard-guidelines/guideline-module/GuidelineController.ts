import { Router, Request } from "express";
import proxy = require("express-http-proxy");
import { Controller } from "../../../interfaces/Controller";

const STANDARD_GUIDELINES_API = process.env.STANDARD_GUIDELINES_API || "localhost:8888";

export class GuidelineController implements Controller {
    buildRouter(): Router {
        const router = Router();
        
        /**
         * @swagger
         * /frameworks/{id}/guidelines:
         *  get:
         *    description: Gets all the Standards and Guidelines associated with a specific framework id
         *    tags:
         *      - Standard Guideline Service
         *    parameters:
         *      - in: path
         *        name: id
         *        schema:
         *          type: string
         *        required: true
         *        description: The framework id
         *    responses:
         *      200:
         *        description: OK
         *        content:
         *          application/json:
         *            schema:
         *              $ref: '#/components/schemas/Guideline'
         *      400:
         *        description: BAD REQUEST - The provided id is not a valid mongo id, Missing property ${property} in Framework
         */
        router.get("/frameworks/:id/guidelines", this.proxyRequest((req: Request) => `/frameworks/${encodeURIComponent(req.params.id)}/guidelines`));
        
        /**
         * @swagger
         * /guidelines/{id}:
         *  get:
         *    description: Gets a specific Guideline or Standard by id
         *    tags:
         *      - Standard Guideline Service
         *    parameters:
         *      - in: path
         *        name: id
         *        schema:
         *          type: string
         *        required: true
         *        description: The guideline id
         *    responses:
         *      200:
         *        description: OK
         *        content:
         *          application/json:
         *            schema:
         *              $ref: '#/components/schemas/Guideline'
         *      400:
         *        description: BAD REQUEST - The provided id is not a valid mongo id
         *      404:
         *        description: NOT FOUND - Guideline or standard with id ${id} was not found
         */
        router.get("/guidelines/:id", this.proxyRequest((req: Request) => `/guidelines/${encodeURIComponent(req.params.id)}`));

        /**
         * @swagger
         * /guidelines:
         *  post:
         *    description: Creates a new Guideline or Standard in the database
         *    tags:
         *      - Standard Guideline Service
         *    requestBody:
         *      content:
         *        application/json:
         *          schema:
         *            type: object
         *            properties:
         *              name:
         *                type: string
         *                required: true
         *                description: The name of the framework
         *                example: Some Framework
         *              levels:
         *                 type: array
         *                 required: true
         *                 description: The level the guideline applies to
         *                 example: ["high"]
         *              year: 
         *                 type: string
         *                 required: true
         *                 description: The year that the guideline applies to
         *                 example: 2021
         *              frameworkId:
         *                 type: ObjectId
         *                 required: true
         *                 description: The framework id that the guideline is associated to
         *                 example: ObjectId("60d0dc0192019201f5e74716")
         *              guideline:
         *                 type: string
         *                 required: true
         *                 description: The description of the guideline
         *                 example: Some Description
         *    responses:
         *      200:
         *        description: OK
         *      400:
         *        description: BAD REQUEST - Missing property ${property} in Guideline or Standard, Level ${level} is not a valid level type, Missing property ${property} in Search Item, The provided id is not a valid mongo id
         *      401:
         *        description: INVALID ACCESS - Not Authorized
         *      403:
         *        description: FORBIDDEN - User is not whitelisted, please use a whitelisted certificate
         *      409:
         *        description: CONFLICT - Search item already exists for guideline id ${id}
         */
        router.post("/guidelines", this.proxyRequest((req: Request) => "/guidelines"));

        /**
         * @swagger
         * /guidelines/{id}:
         *  patch:
         *    description: Updates a Guideline or Standard by id
         *    tags:
         *      - Standard Guideline Service
         *    parameters:
         *      - in: path
         *        name: id
         *        schema:
         *          type: string
         *        required: true
         *        description: The guideline id
         *    requestBody:
         *      content:
         *        application/json:
         *          schema:
         *            type: object
         *            properties:
         *              name:
         *                type: string
         *                required: true
         *                description: The name of the framework
         *                example: Some Framework
         *              levels:
         *                 type: array
         *                 required: true
         *                 description: The level the guideline applies to
         *                 example: ["high"]
         *              year: 
         *                 type: string
         *                 required: true
         *                 description: The year that the guideline applies to
         *                 example: 2021
         *              frameworkId:
         *                 type: ObjectId
         *                 required: true
         *                 description: The framework id that the guideline is associated to
         *                 example: ObjectId("60d0dc0192019201f5e74716")
         *              guideline:
         *                 type: string
         *                 required: true
         *                 description: The description of the guideline
         *                 example: Some Description
         *    responses:
         *      201:
         *        description: OK
         *      400:
         *        description: BAD REQUEST - Missing property ${property} in Guideline or Standard, Level ${level} is not a valid level type, Missing property ${property} in Search Item, The provided id is not a valid mongo id, Guideline id does not match the id to update in the search item
         *      401:
         *        description: INVALID ACCESS - Not Authorized
         *      403:
         *        description: FORBIDDEN - User is not whitelisted, please use a whitelisted certificate
         *      404:
         *        description: NOT FOUND - Guideline or standard with id ${id} was not found, Framework with id ${id} was not found, Search item with guideline id ${id} was not found
         */
        router.patch("/guidelines/:id", this.proxyRequest((req: Request) => `/guidelines/${encodeURIComponent(req.params.id)}`));

        /**
         * @swagger
         * /guidelines/{id}:
         *  delete:
         *    description: Deletes a Guideline or Standard by id
         *    tags:
         *      - Standard Guideline Service
         *    parameters:
         *      - in: path
         *        name: id
         *        schema:
         *          type: string
         *        required: true
         *        description: The guideline id
         *    responses:
         *      200:
         *        description: OK
         *      400:
         *        description: BAD REQUEST - The provided id is not a valid mongo id
         *      401:
         *        description: INVALID ACCESS - Not Authorized
         *      403:
         *        description: FORBIDDEN - User is not whitelisted, please use a whitelisted certificate
         *      404:
         *        description: NOT FOUND - Guideline or standard with id ${id} was not found, Search item with guideline id ${id} was not found
         */
        router.delete("/guidelines/:id", this.proxyRequest((req: Request) => `/guidelines/${encodeURIComponent(req.params.id)}`));

        return router;
    }

    private proxyRequest(callback: any) {
        return proxy(STANDARD_GUIDELINES_API, {
            proxyReqPathResolver: req => {
                return callback(req);
            },
        });
    }
}