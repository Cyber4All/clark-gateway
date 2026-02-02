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
];
