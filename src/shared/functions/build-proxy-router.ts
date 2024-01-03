import { Router } from "express";
import { ProxyRoute } from "../types/proxy-route.type";
import { HTTPMethod } from "../types/http-method.type";
import { createProxyMiddleware, fixRequestBody, RequestHandler } from "http-proxy-middleware";
import { envConfig } from "../../config/env/env.driver";
import { ServiceError, ServiceErrorReason } from "../types/error.type";

/**
 * Sets up a Router based on the configuration from ProxyRoute[]
 * 
 * @param routes An array of ProxyRoutes with request and proxy config
 * @param target Url string to be parsed (i.e host)
 * @returns Router object with proxy routes
 */
export function buildProxyRouter(routes: ProxyRoute[], target?: string): Router {
    const router = Router();
    
    routes.forEach(async (route: ProxyRoute) => proxyRoute(router, route, target));

    return router;
}

/**
 * Sets up an HTTP request with a proxy configuration for an express router
 * 
 * @param router A Router to be created (origin is from buildProxyRouter typically)
 * @param route Proxy Route Config from a *.routes.ts file, defined by proxy-route.type.ts
 * @param target Url string to be parsed (i.e host)
 * 
 * @returns void (changes @param router Router object)
 */
async function proxyRoute(router: Router, route: ProxyRoute, target?: string): Promise<void> {
    if (!target && (route.proxy && !route.proxy.target)) {
        throw new ServiceError("Target must be set in either the proxy configuration or passed from RouteHandler", ServiceErrorReason.INTERNAL);
    }
    
    const proxy: RequestHandler = createProxyMiddleware({
        target: target,
        onProxyReq: fixRequestBody,
        secure: envConfig.isProduction(),
        changeOrigin: true,
        ...route.proxy, // if target is set, it'll override target being set here
    });

    switch(route.method) {
        case HTTPMethod.GET:
            router.get(route.path, proxy);
            break;
        case HTTPMethod.POST:
            router.post(route.path, proxy);
            break;
        case HTTPMethod.PATCH:
            router.patch(route.path, proxy);
            break;
        case HTTPMethod.DELETE:
            router.delete(route.path, proxy);
            break;
        default:
            throw new ServiceError("HTTP Method Unsupported", ServiceErrorReason.INTERNAL);
    }
}