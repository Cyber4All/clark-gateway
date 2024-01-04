import { envConfig } from "../../../config/env/env.driver";
import { UTILITY_SERVICE_URI } from "../../../config/global.env";
import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const UTILITY_ROUTES: ProxyRoute[] = [
    /**
     * Blog Routes
     */
    {
        method: HTTPMethod.GET,
        path: "/blogs",
        auth: true,
    },
    {
        method: HTTPMethod.POST,
        path: "/blogs",
        auth: true,
    },

    /**
     * Client Version Routes
     */
    {
        method: HTTPMethod.GET,
        path: "/clientversion",
    },

    /**
     * The following routes have not been declared by
     * clark-service yet and will have a different target
     * than clark-service
     */
    // TODO: This routes target should be set for utility service
    {
        method: HTTPMethod.GET,
        path: "/downtime",
        target: envConfig.getUri(UTILITY_SERVICE_URI),
    },
];
