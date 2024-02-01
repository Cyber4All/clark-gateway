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
    {
        method: HTTPMethod.PATCH,
        path: "/users",
        auth: true,
        target: envConfig.getUri(USER_SERVICE_URI),
    },

    /**
     * The following routes have not been declared by
     * clark-service yet and will have a different target
     * than clark-service
     */

    /**
     * Mapper routes
     */
    {
        method: HTTPMethod.GET,
        path: "/guidelines/members",
        auth: true,
        target: envConfig.getUri(USER_SERVICE_URI),
    },
    {
        method: HTTPMethod.DELETE,
        path: "/guidelines/members/:memberId",
        auth: true,
        target: envConfig.getUri(USER_SERVICE_URI),
    },

    /**
     * Personal routes
     */
    {
        method: HTTPMethod.GET,
        path: "/users/:username/learning-objects",
        target: envConfig.getUri(USER_SERVICE_URI),
    },

    /**
     * Public routes
     */
    {
        method: HTTPMethod.GET,
        path: "/users/:username/profile",
        auth: true,
        target: envConfig.getUri(USER_SERVICE_URI),
    },
    {
        method: HTTPMethod.GET,
        path: "/users/curators/:collection",
        target: envConfig.getUri(USER_SERVICE_URI),
    },

    /**
     * Recovery routes
     */
    // TODO: This will be broken until migrated to clark-service
    // manually test once migrated
    {
        method: HTTPMethod.GET,
        path: "/users/ota-codes",
        target: envConfig.getUri(USER_SERVICE_URI),
    },
    // TODO: This will be broken until migrated to clark-service
    // manually test once migrated
    {
        method: HTTPMethod.POST,
        path: "/users/ota-codes",
        target: envConfig.getUri(USER_SERVICE_URI),
    },
    // TODO: This will be broken until migrated to clark-service
    // manually test once migrated
    {
        method: HTTPMethod.PATCH,
        path: "/users/ota-codes",
        target: envConfig.getUri(USER_SERVICE_URI),
    },
    {
        method: HTTPMethod.GET,
        path: "/validate-captcha",
        auth: true,
        target: envConfig.getUri(USER_SERVICE_URI),
    },
];
