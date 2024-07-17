import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const AUTH_ROUTES: ProxyRoute[] = [
    /**
     * Encryption Routes
     */
    {
        method: HTTPMethod.GET,
        path: "/keys",
    },

    /**
     * Token Routes
     */
    {
        method: HTTPMethod.GET,
        path: "/users/tokens",
        auth: true,
    },
    {
        method: HTTPMethod.GET,
        path: "/users/tokens/refresh",
        auth: true,
    },

    /**
     * Registration/Login Routes
     */
    {
        method: HTTPMethod.GET,
        path: "/users/validate",
    },
    {
        method: HTTPMethod.POST,
        path: "/users/login",
    },
    {
        method: HTTPMethod.POST,
        path: "/users",
    },
    {
        method: HTTPMethod.GET,
        path: "/validate-captcha",
    },

    /**
     * SSO Routes
     */
    {
        method: HTTPMethod.GET,
        path: "/google",
    },
    {
        method: HTTPMethod.GET,
        path: "/google/redirect",
    },

    /**
     * Recovery Routes
     */
    {
        method: HTTPMethod.GET,
        path: "/users/ota-code",
    },
    {
        method: HTTPMethod.POST,
        path: "/users/ota-code",
    },
    {
        method: HTTPMethod.PATCH,
        path: "/users/ota-code",
    }
];
