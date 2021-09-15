import { Router, Request } from "express";
import proxy = require("express-http-proxy");
import { Controller } from "../../../interfaces/Controller";
import * as querystring from 'querystring';

const STANDARD_GUIDELINES_API = process.env.STANDARD_GUIDELINES_API || 'localhost:8888';

export class SearchController implements Controller {
    buildRouter(): Router {
        const router = Router();
        
        /**
         * @swagger
         * /frameworks:
         *  get:
         *    description: Searches frameworks given a text query
         *    tags:
         *      - Standard Guideline Service
         *    parameters:
         *      - in: query
         *        name: text
         *        schema:
         *          type: string
         *        description: The search string
         *        example: Framework
         *      - in: query
         *        name: year
         *        schema:
         *          type: string
         *        description: The year a guideline or framework is assigned
         *        example: 2021
         *      - in: query
         *        name: levels
         *        schema:
         *          type: string
         *        description: The levels to guidelines apply to
         *        example: high,middle
         *      - in: query
         *        name: page
         *        schema:
         *          type: string
         *        description: The current page, default is 1
         *        example: 1
         *      - in: query
         *        name: limit
         *        schema:
         *          type: string
         *        description: The max number of search indexes returned, default is 10
         *        example: 10
         *      - in: query
         *        name: type
         *        schema:
         *          type: string
         *        description: Determine whether to search for guidelines or frameworks, default is guidelines
         *        example: guidelines
         *      - in: query
         *        name: deprecated
         *        schema:
         *          type: string
         *        description: Filter for deprecated frameworks, can be set to 'true', 'false', or 'all' defaults to 'false'
         *        example: all
         *    responses:
         *      200:
         *        description: OK
         *        content:
         *          application/json:
         *            schema:
         *              $ref: '#/components/schemas/FrameworkSearchResults'
         */
        router.get('/frameworks', this.proxyRequest((req: Request) => `/frameworks?${req.query ? querystring.stringify(req.query) : ''}`));

        /**
         * @swagger
         * /guidelines:
         *  get:
         *    description: Searches guidelines/standards given a text, year, and level query
         *    tags:
         *      - Standard Guideline Service
         *    parameters:
         *      - in: query
         *        name: text
         *        schema:
         *          type: string
         *        description: The search string
         *        example: Framework
         *      - in: query
         *        name: year
         *        schema:
         *          type: string
         *        description: The year a guideline or framework is assigned
         *        example: 2021
         *      - in: query
         *        name: levels
         *        schema:
         *          type: string
         *        description: The levels to guidelines apply to
         *        example: high,middle
         *      - in: query
         *        name: page
         *        schema:
         *          type: string
         *        description: The current page, default is 1
         *        example: 1
         *      - in: query
         *        name: limit
         *        schema:
         *          type: string
         *        description: The max number of search indexes returned, default is 10
         *        example: 10
         *      - in: query
         *        name: type
         *        schema:
         *          type: string
         *        description: Determine whether to search for guidelines or frameworks, default is guidelines
         *        example: guidelines
         *      - in: query
         *        name: deprecated
         *        schema:
         *          type: string
         *        description: Filter for deprecated guidelines, can be set to 'true', 'false', or 'all' defaults to 'false'
         *        example: all
         *    responses:
         *      200:
         *        description: OK
         *        content:
         *          application/json:
         *            schema:
         *              $ref: '#/components/schemas/SearchResults'
         */
        router.get('/guidelines', this.proxyRequest((req: Request) => `/guidelines?${req.query ? querystring.stringify(req.query) : ''}`));

        return router;
    }

    private proxyRequest(callback: Function) {
        return proxy(STANDARD_GUIDELINES_API, {
            proxyReqPathResolver: req => {
                return callback(req);
            },
        });
    }
}