import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const ORGANIZATION_ROUTES: ProxyRoute[] = [
    /**
     * Search route
     */
    {
        method: HTTPMethod.GET,
        path: "/organizations",
    },
    {
        method: HTTPMethod.GET,
        path: "/organizations/:organizationId",
    },
    {
        method: HTTPMethod.GET,
        path: "/organizations/suggest",
    },
    {
        method: HTTPMethod.POST,
        path: "/organizations",
    },
    {
        method: HTTPMethod.PATCH,
        auth: true,
        path: "/organizations/:organizationId",
    },
    {
        method: HTTPMethod.DELETE,
        auth: true,
        path: "/organizations/:organizationId",
    }
];
