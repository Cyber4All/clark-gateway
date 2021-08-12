import { Router, Request } from "express";
import proxy = require("express-http-proxy");
import { Controller } from "../../../interfaces/Controller";

const STANDARD_GUIDELINES_API = process.env.STANDARD_GUIDELINES_API || 'localhost:8888';

export class AuthController implements Controller {
    buildRouter(): Router {
        const router = Router();
        
        router.get("/authenticate");

        return router;
    }

}