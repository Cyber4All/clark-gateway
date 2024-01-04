import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const UTILITY_ROUTES: ProxyRoute[] = [
    /**
     * Blog Routes
     */
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.GET,
        path: "/blogs",
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.POST,
        path: "/blogs",
    },

    /**
     * Client Version Routes
     */
    {
        method: HTTPMethod.GET,
        path: "/clientversion",
    },
];
