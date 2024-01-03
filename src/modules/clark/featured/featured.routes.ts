import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const FEATURED_ROUTES: ProxyRoute[] = [
    // TODO: Manually test these routes once they are implemented in clark-service
    // The following routes have been declared in clark-service but not yet implemented
    {
        method: HTTPMethod.GET,
        path: "/featured/learning-objects",
    },
    {
        method: HTTPMethod.PATCH,
        path: "/featured/learning-objects",
    },
    {
        method: HTTPMethod.PATCH,
        path: "/featured/learning-objects/:collection",
    },
];
