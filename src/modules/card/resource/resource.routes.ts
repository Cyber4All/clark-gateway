import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const RESOURCE_ROUTES: ProxyRoute[] = [
    {
        method: HTTPMethod.GET,
        auth: true,
        path: "/users/:userId/resources/count",
    },
    {
        method: HTTPMethod.GET,
        auth: true,
        path: "/users/:userId/resources/:resourceId",
    },
    {
        method: HTTPMethod.GET,
        path: "/resources/categories",
    },
    {
        method: HTTPMethod.GET,
        auth: true,
        path: "/resources/links",
    },
    {
        method: HTTPMethod.POST,
        auth: true,
        path: "/resources/category",
    },
    {
        method: HTTPMethod.POST,
        auth: true,
        path: "/users/:userId/resources",
    },
    {
        method: HTTPMethod.PATCH,
        auth: true,
        path: "/users/:userId/resources/:resourceId",
    },
    {
        method: HTTPMethod.PATCH,
        path: "/users/:userId/resources/:resourceId/status",
    },
    {
        method: HTTPMethod.PATCH,
        auth: true,
        path: "/users/:userId/resources/:resourceId/author",
    },
    {
        method: HTTPMethod.PATCH,
        auth: true,
        path: "/resources/checked",
    },
    {
        method: HTTPMethod.DELETE,
        auth: true,
        path: "/users/:userId/resources/:resourceId",
    },
];
