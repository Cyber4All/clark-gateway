import { Router, Request } from "express";
import proxy = require("express-http-proxy");
import { Controller } from "../../../interfaces/Controller";

const STANDARD_GUIDELINES_API = process.env.STANDARD_GUIDELINES_API || 'localhost:8888';

export class FrameworkController implements Controller {
    buildRouter(): Router {
        const router = Router();
        
        router.get('/:id', this.proxyRequest((req: Request) => `/${encodeURIComponent(req.params.id)}`));
        router.post('/');
        router.patch('/:id', this.proxyRequest((req: Request) => `/${encodeURIComponent(req.params.id)}`));
        router.delete('/:id', this.proxyRequest((req: Request) => `/${encodeURIComponent(req.params.id)}`));

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