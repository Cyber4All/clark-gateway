import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const UPDATE_ROUTES: ProxyRoute[] = [
    {
        method: HTTPMethod.GET,
        auth: true,
        path: "/users/:userId/resources/:resourceId/updates",
    },
    {
        method: HTTPMethod.PATCH,
        auth: true,
        path: "/users/:userId/resources/:resourceId/updates",
    },
    {
        method: HTTPMethod.PATCH,
        auth: true,
        path: "/users/:userId/resources/:resourceId/updates/state",
    },
    {
        method: HTTPMethod.PATCH,
        path: "/users/:userId/resources/:resourceId/updates/decline",
    },
    {
        method: HTTPMethod.DELETE,
        auth: true,
        path: "/users/:userId/resources/:resourceId/updates",
    },
];
