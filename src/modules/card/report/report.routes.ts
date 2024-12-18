import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const REPORT_ROUTES: ProxyRoute[] = [
    {
        method: HTTPMethod.GET,
        auth: true,
        path: "/users/:userId/resources/:resourceId/reports",
    },
    {
        method: HTTPMethod.GET,
        auth: true,
        path: "/users/:userId/resources/:resourceId/reports/:reportId",
    },
    {
        method: HTTPMethod.POST,
        auth: true,
        path: "/users/:userId/resources/:resourceId/reports",
    },
    {
        method: HTTPMethod.PATCH,
        auth: true,
        path: "/users/:userId/resources/:resourceId/reports/:reportId",
    },
    {
        method: HTTPMethod.PATCH,
        auth: true,
        path: "/users/:userId/resources/:resourceId/reports/:reportId/state",
    },
    {
        method: HTTPMethod.DELETE,
        auth: true,
        path: "/users/:userId/resources/:resourceId/reports/:reportId",
    },
];
