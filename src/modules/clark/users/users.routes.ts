import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const USERS_ROUTES: ProxyRoute[] = [
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
    },
    {
        method: HTTPMethod.PUT,
        path: "/guidelines/members/:memberId",
        auth: true,
    },
    {
        method: HTTPMethod.DELETE,
        path: "/guidelines/members/:memberId",
        auth: true,
    },

    /**
     * Authentication routes
     */
    {
        method: HTTPMethod.GET,
        path: "/users/identifiers/active",
    },
    {
        method: HTTPMethod.GET,
        path: "/keys",
    },
    {
        method: HTTPMethod.GET,
        path: "/users/tokens/refresh",
        auth: true,
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
        method: HTTPMethod.DELETE,
        path: "/users/:username/tokens",
        auth: true,
    },
    {
        method: HTTPMethod.GET,
        path: "/google",
    },
    {
        method: HTTPMethod.GET,
        path: "/google/redirect",
    },

    /**
     * Personal routes
     */
    {
        method: HTTPMethod.GET,
        path: "/users/tokens",
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:username/learning-objects",
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:user",
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:username/collections",
        auth: true,
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:id/roles",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/users",
        auth: true,
    },

    /**
     * Public routes
     */
    {
        method: HTTPMethod.GET,
        path: "/users",
        auth: true,
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:username/profile",
        auth: true,
    },
    {
        method: HTTPMethod.GET,
        path: "/users/curators/:collection",
    },

    /**
     * Access Groups routes
     */
    {
        method: HTTPMethod.GET,
        path: "/collections/:colletionName/members",
        auth: true,
    },
    {
        method: HTTPMethod.PUT,
        path: "/collections/:colletionName/members/:memberId",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/collections/:colletionName/members/:memberId",
        auth: true,
    },
    {
        method: HTTPMethod.DELETE,
        path: "/collections/:collectionName/members/:memberId",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/access-groups/users/:username",
        auth: true,
    },

    /**
     * User Stats routes
     */
    {
        method: HTTPMethod.GET,
        path: "/users/stats",
    },

    /**
     * Recovery routes
     */
    // TODO: This will be broken until migrated to clark-service
    // manually test once migrated
    {
        method: HTTPMethod.GET,
        path: "/users/ota-codes",
    },
    // TODO: This will be broken until migrated to clark-service
    // manually test once migrated
    {
        method: HTTPMethod.POST,
        path: "/users/ota-codes",
    },
    // TODO: This will be broken until migrated to clark-service
    // manually test once migrated
    {
        method: HTTPMethod.PATCH,
        path: "/users/ota-codes",
    },
    {
        method: HTTPMethod.GET,
        path: "/validate-captcha",
        auth: true,
    },
];
