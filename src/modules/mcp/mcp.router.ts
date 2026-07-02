import { Router } from "express";
import { ClarkMCPRouteHandler } from "./clark-mcp.router";

export class MCPRouteHandler {
    public static build(): Router {
        const router = Router();
        router.use(ClarkMCPRouteHandler.build());

        return router;
    }
}
