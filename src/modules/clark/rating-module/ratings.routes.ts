import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const RATINGS_ROUTES: ProxyRoute[] = [
    /**
     * Flag Routes
     */
    {
        method: HTTPMethod.GET,
        path: "/ratings/:ratingId/flags",
        auth: true,
    },
    {
        method: HTTPMethod.POST,
        path: "/ratings/:ratingId/flags",
        auth: true,
    },
    {
        method: HTTPMethod.DELETE,
        path: "/ratings/:ratingId/flags/:flagId",
        auth: true,
    },

    /**
     * Rating Routes
     */
    {
        method: HTTPMethod.GET,
        path: "/ratings",
    },
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:cuid/version/:version/ratings",
    },
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/:cuid/version/:version/ratings",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:cuid/version/:version/ratings/:ratingId",
        auth: true,
    },
    {
        method: HTTPMethod.DELETE,
        path: "/learning-objects/:cuid/version/:version/ratings/:ratingId",
        auth: true,
    },

    /**
     * Rating Responses Routes
     */
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/ratings/responses/:responseId",
    },
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/ratings/:ratingId/responses",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/ratings/responses/:responseId",
        auth: true,
    },
    {
        method: HTTPMethod.DELETE,
        path: "/learning-objects/ratings/responses/:responseId",
        auth: true,
    },
];
