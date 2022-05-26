import { Router, Request } from "express";
import proxy = require("express-http-proxy");
import { Controller } from "../../../interfaces/Controller";

const STANDARD_GUIDELINES_API = process.env.STANDARD_GUIDELINES_API || "localhost:8888";

export class AuthController implements Controller {
    buildRouter(): Router {
        const router = Router();
        
        /**
         * @swagger
         * /authenticate:
         *  get:
         *    description: authenticates a user 
         *    tags:
         *      - Standard Guideline Service
         *    responses:
         *      200:
         *        description: OK
         *      401:
         *        description: INVALID ACCESS - User does not have a valid certificate
         *      403:
         *        description: FORBIDDEN - User is not whitelisted, please use a whitelisted certificate
         */
        router.get("/authenticate", this.proxyRequest((req: Request) => "/authenticate"));

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