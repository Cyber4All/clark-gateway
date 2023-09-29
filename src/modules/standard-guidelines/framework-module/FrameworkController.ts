/* eslint-disable @typescript-eslint/no-unused-vars --
    This disable is added to ignore the 'req' in this.proxyRequest */
import { Router, Request } from "express";
import proxy = require("express-http-proxy");
import { Controller } from "../../../interfaces/Controller";

const STANDARD_GUIDELINES_API =
  process.env.STANDARD_GUIDELINES_API || "localhost:8888";

export class FrameworkController implements Controller {
  buildRouter(): Router {
    const router = Router();

    /**
     * @swagger
     * /frameworks/{id}:
     *  get:
     *    description: Gets a framework by id
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
     *              $ref: '#/components/schemas/FrameworkDocument'
     *      400:
     *        description: BAD REQUEST - The provided id is not a valid mongo id
     *      404:
     *        description: NOT FOUND - Framework with id ${id} was not found
     */
    router.get(
      "/frameworks/:id",
      this.proxyRequest(
        (req: Request) => `/frameworks/${encodeURIComponent(req.params.id)}`,
      ),
    );

    /**
     * @swagger
     * /frameworks:
     *  post:
     *    description: Creates a framework
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
     *              author:
     *                 type: string
     *                 required: true
     *                 description: The author of the of the framework
     *                 example: Some Author
     *              source:
     *                 type: string
     *                 required: true
     *                 description: The source of the framework
     *                 example: Some Source
     *              description:
     *                 type: string
     *                 required: true
     *                 description: The description of the framework
     *                 example: Some Description
     *    responses:
     *      201:
     *        description: OK - created new framework
     *      400:
     *        description: BAD REQUEST - Missing property ${property} in Framework
     *      401:
     *        description: INVALID ACCESS - Not Authorized
     *      403:
     *        description: FORBIDDEN - User is not whitelisted, please use a whitelisted certificate
     */
    router.post(
      "/frameworks",
      this.proxyRequest((req: Request) => "/frameworks"),
    );

    /**
     * @swagger
     * /frameworks/{id}:
     *  patch:
     *    description: Updates a framework by id
     *    tags:
     *      - Standard Guideline Service
     *    parameters:
     *      - in: path
     *        name: id
     *        schema:
     *          type: string
     *        required: true
     *        description: The framework id
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
     *              author:
     *                 type: string
     *                 required: true
     *                 description: The author of the of the framework
     *                 example: Some Author
     *              source:
     *                 type: string
     *                 required: true
     *                 description: The source of the framework
     *                 example: Some Source
     *              description:
     *                 type: string
     *                 required: true
     *                 description: The description of the framework
     *                 example: Some Description
     *    responses:
     *      200:
     *        description: OK
     *      400:
     *        description: BAD REQUEST - Missing property ${property} in Framework, The provided id is not a valid mongo id
     *      401:
     *        description: INVALID ACCESS - Not Authorized
     *      403:
     *        description: FORBIDDEN - User is not whitelisted, please use a whitelisted certificate
     *      404:
     *        description: NOT FOUND - Framework with id ${id} was not found, Guideline or standard with id ${id} was not found
     */
    router.patch(
      "/frameworks/:id",
      this.proxyRequest(
        (req: Request) => `/frameworks/${encodeURIComponent(req.params.id)}`,
      ),
    );

    /**
     * @swagger
     * /frameworks/{id}/deprecate:
     *  patch:
     *    description: Deprecate a framework by id
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
     *      400:
     *        description: BAD REQUEST - The provided id is not a valid mongo id
     *      401:
     *        description: INVALID ACCESS - Not Authorized
     *      403:
     *        description: FORBIDDEN - User is not whitelisted, please use a whitelisted certificate
     *      404:
     *        description: NOT FOUND - Framework with id ${id} was not found
     *      409:
     *        description: CONFLICT - Framework is already deprecated
     */
    router.patch(
      "/frameworks/:id/deprecate",
      this.proxyRequest(
        (req: Request) =>
          `/frameworks/${encodeURIComponent(req.params.id)}/deprecate`,
      ),
    );

    /**
     * @swagger
     * /frameworks/{id}:
     *  delete:
     *    description: Deletes a framework by id
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
     *      400:
     *        description: BAD REQUEST - The provided id is not a valid mongo id
     *      401:
     *        description: INVALID ACCESS - Not Authorized
     *      403:
     *        description: FORBIDDEN - User is not whitelisted, please use a whitelisted certificate
     *      404:
     *        description: NOT FOUND - Framework with id ${id} was not found
     */
    router.delete(
      "/frameworks/:id",
      this.proxyRequest(
        (req: Request) => `/frameworks/${encodeURIComponent(req.params.id)}`,
      ),
    );

    return router;
  }

  private proxyRequest(callback: any) {
    return proxy(STANDARD_GUIDELINES_API, {
      proxyReqPathResolver: (req) => {
        return callback(req);
      },
    });
  }
}
