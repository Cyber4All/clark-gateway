import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const RATINGS_ROUTES: ProxyRoute[] = [
    /**
     * Rating Flags Routes
     */
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.GET,
        path: "/ratings/:ratingId/flags"
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.POST,
        path: "/ratings/:ratingId/flags"
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.DELETE,
        path: "/ratings/:ratingId/flags/:flagId"
    },

    /**
     * Rating Routes
     */
    {
        method: HTTPMethod.GET,
        path: "/ratings"
    },
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:cuid/version/:version/ratings"
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/:cuid/version/:version/ratings"
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:cuid/version/:version/ratings/:ratingId"
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.DELETE,
        path: "/learning-objects/:cuid/version/:version/ratings/:ratingId"
    },

    /**
     * Rating Responses Routes
     */
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/ratings/responses/:responseId"
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/ratings/:ratingId/responses"
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/ratings/responses/:responseId"
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.DELETE,
        path: "/learning-objects/ratings/responses/:responseId"
    }
];