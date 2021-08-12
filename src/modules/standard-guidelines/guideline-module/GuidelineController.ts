import { Router, Request } from "express";
import proxy = require("express-http-proxy");
import { Controller } from "../../../interfaces/Controller";

const STANDARD_GUIDELINES_API = process.env.STANDARD_GUIDELINES_API || 'localhost:8888';

export class GuidelineController implements Controller {
    buildRouter(): Router {
        const router = Router();
        
        router.get('/frameworks/:id/guidelines', this.proxyRequest((req: Request) => `/frameworks/${encodeURIComponent(req.params.id)}/guidelines`));
        router.get('/guidelines/:id', this.proxyRequest((req: Request) => `/guidelines/${encodeURIComponent(req.params.id)}`));
        router.post('/guidelines');
        router.patch('/guidelines/:id', this.proxyRequest((req: Request) => `/guidelines/${encodeURIComponent(req.params.id)}`));
        router.delete('/guidelines/:id', this.proxyRequest((req: Request) => `/guidelines/${encodeURIComponent(req.params.id)}`));

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