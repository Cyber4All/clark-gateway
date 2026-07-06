import { Router } from "express";
import { buildProxyRouter } from "../../shared/functions/build-proxy-router";
import { MCP_ROUTES } from "./clark-mcp.routes";
import { envConfig } from "../../config/env/env.driver";
import { MCP_SERVICE_URI } from "../../config/global.env";

export class ClarkMCPRouteHandler {
    public static build(): Router {
        return buildProxyRouter(MCP_ROUTES, envConfig.getUri(MCP_SERVICE_URI));
    }
}
