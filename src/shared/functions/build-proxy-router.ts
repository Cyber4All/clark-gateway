import { Router } from "express";
import { ProxyRoute } from "../types/proxy-route.type";
import { HTTPMethod } from "../types/http-method.type";
import {
    createProxyMiddleware,
    fixRequestBody,
    RequestHandler,
} from "http-proxy-middleware";
import { envConfig } from "../../config/env/env.driver";
import { ServiceError, ServiceErrorReason } from "../types/error.type";
import { AuthenticateRequest } from "../../middlewares/authenticate-request";

/**
 * Sets up a Router based on the configuration from ProxyRoute[]
 *
 * @param routes An array of ProxyRoutes with request and proxy config
 * @param target Url string to be parsed (i.e host)
 * @returns Router object with proxy routes
 */
export function buildProxyRouter(routes: ProxyRoute[], target: string): Router {
    const router = Router();

    routes.forEach(async (route: ProxyRoute) =>
        proxyRoute(router, route, target),
    );

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
export async function proxyRoute(
    router: Router,
    route: ProxyRoute,
    target?: string,
): Promise<void> {
    // Ensure a target is set
    if (!target && !route.target) {
        throw new ServiceError(
            "Proxy Target Not Found",
            ServiceErrorReason.INTERNAL,
        );
    }

    const proxy: RequestHandler = createProxyMiddleware({
        // URL for the proxy to send requests to
        // prioritizes target set in the ProxyRoute
        target: route.target || target,
        changeOrigin: true,

        // fixes body parsing for POST requests
        onProxyReq: fixRequestBody,

        // enable SSL cert verification
        secure: envConfig.isProduction(),
    });

    // Set whether authentication middleware will be used
    const auth_middleware = route.auth
        ? AuthenticateRequest
        : (req, res, next) => next();

    // Set the route based on the HTTP method
    switch (route.method) {
        case HTTPMethod.GET:
            router.get(route.path, auth_middleware, proxy);
            break;
        case HTTPMethod.POST:
            router.post(route.path, auth_middleware, proxy);
            break;
        case HTTPMethod.PATCH:
            router.patch(route.path, auth_middleware, proxy);
            break;
        case HTTPMethod.PUT:
            router.put(route.path, auth_middleware, proxy);
            break;
        case HTTPMethod.DELETE:
            router.delete(route.path, auth_middleware, proxy);
            break;
        default:
            throw new ServiceError(
                "HTTP Method Unsupported",
                ServiceErrorReason.INTERNAL,
            );
    }
}
