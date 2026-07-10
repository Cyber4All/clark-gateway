import { Router } from "express";
import { envConfig } from "../../config/env/env.driver";
import { MCP_SERVICE_URI } from "../../config/global.env";
import { createProxyMiddleware } from "http-proxy-middleware/dist";

export class ClarkMCPRouteHandler {
    public static build(): Router {
        const router = Router();

        router.post(
            "/mcp",
            createProxyMiddleware({
                target: envConfig.getUri(MCP_SERVICE_URI),
                changeOrigin: true,
                secure:
                    envConfig.isProduction() || envConfig.isStaging()
                        ? true
                        : false,
                timeout: 120000,
                proxyTimeout: 120000,
            }),
        );

        return router;
    }
}
