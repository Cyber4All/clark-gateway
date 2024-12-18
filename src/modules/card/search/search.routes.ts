import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const SEARCH_ROUTES: ProxyRoute[] = [
    {
        method: HTTPMethod.GET,
        path: "/resources",
    },
    {
        method: HTTPMethod.GET,
        path: "/organizations",
    },
    {
        method: HTTPMethod.GET,
        auth: true,
        path: "/users/:userId/resources",
    }
];
