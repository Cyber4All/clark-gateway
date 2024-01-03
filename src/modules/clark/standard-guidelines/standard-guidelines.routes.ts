import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const STANDARD_GUIDELINES_ROUTES: ProxyRoute[] = [
    /**
     * The following routes have not been declared by
     * clark-service yet and will have a different target
     * than clark-service
     *
     * The target for the following routes shoud be standard guidelines
     */

    /**
     * Authentication routes
     */
    {
        method: HTTPMethod.GET,
        path: "/authenticate",
    },

    /**
     * Framework routes
     */
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.GET,
        path: "/frameworks/:id",
    },
    {
        method: HTTPMethod.POST,
        path: "/frameworks",
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.PATCH,
        path: "/frameworks/:id",
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.PATCH,
        path: "/frameworks/:id/deprecate",
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.DELETE,
        path: "/frameworks/:id",
    },

    /**
     * Guideline routes
     */
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.GET,
        path: "/frameworks/:id/guidelines",
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.GET,
        path: "/guidelines/:id",
    },
    {
        method: HTTPMethod.POST,
        path: "/guidelines",
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.PATCH,
        path: "/guidelines/:id",
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.PATCH,
        path: "/guidelines/:id/deprecate",
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.DELETE,
        path: "/guidelines/:id",
    },

    /**
     * Search routes
     */
    {
        method: HTTPMethod.GET,
        path: "/frameworks",
    },
    {
        method: HTTPMethod.GET,
        path: "/guidelines",
    },
];
