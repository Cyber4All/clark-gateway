import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const ORGANIZATION_ROUTES: ProxyRoute[] = [
    {
        method: HTTPMethod.GET,
        path: "/organizations/:organizationId",
    },
    {
        method: HTTPMethod.GET,
        path: "/organizations/ids/multiple",
    },
    {
        method: HTTPMethod.POST,
        auth: true,
        path: "/organizations",
    },
    {
        method: HTTPMethod.PATCH,
        auth: true,
        path: "/organizations/:organizationId",
    },
    {
        method: HTTPMethod.PATCH,
        auth: true,
        path: "/organizations/:organizationId/verify",
    },
    {
        method: HTTPMethod.DELETE,
        auth: true,
        path: "/organizations/:organizationId",
    },
];
