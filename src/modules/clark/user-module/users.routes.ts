import { envConfig } from "../../../config/env/env.driver";
import { USER_SERVICE_URI } from "../../../config/global.env";
import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const USERS_ROUTES: ProxyRoute[] = [
    {
        method: HTTPMethod.GET,
        path: "/users",
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:user",
    },

    /**
     * The following routes have not been declared by
     * clark-service yet and will have a different target
     * than clark-service
     */
    {
        method: HTTPMethod.PATCH,
        path: "/users",
        auth: true,
        target: envConfig.getUri(USER_SERVICE_URI),
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:username/profile",
        auth: true,
        target: envConfig.getUri(USER_SERVICE_URI),
    },
];
