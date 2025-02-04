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
    {
        method: HTTPMethod.GET,
        path: "/frameworks/:id",
    },
    {
        method: HTTPMethod.POST,
        path: "/frameworks",
    },
    {
        method: HTTPMethod.PATCH,
        path: "/frameworks/:id",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/frameworks/:id/deprecate",
        auth: true,
    },
    {
        method: HTTPMethod.DELETE,
        path: "/frameworks/:id",
        auth: true,
    },

    /**
     * Guideline routes
     */
    {
        method: HTTPMethod.GET,
        path: "/frameworks/:id/guidelines",
    },
    {
        method: HTTPMethod.GET,
        path: "/guidelines/:id",
    },
    {
        method: HTTPMethod.POST,
        path: "/guidelines",
    },
    {
        method: HTTPMethod.PATCH,
        path: "/guidelines/:id",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/guidelines/:id/deprecate",
        auth: true,
    },
    {
        method: HTTPMethod.DELETE,
        path: "/guidelines/:id",
        auth: true,
    },

    /**
     * Tag routes
     */
    {
        method: HTTPMethod.GET,
        path: "/tags",
    },
    {
        method: HTTPMethod.GET,
        path: "/tags/types"
    },
    {
        method: HTTPMethod.GET,
        path: "/tags/:tagId",
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
