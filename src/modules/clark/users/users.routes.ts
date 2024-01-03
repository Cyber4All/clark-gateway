import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const USERS_ROUTES: ProxyRoute[] = [
    /**
     * The following routes have not been declared by
     * clark-service yet and will have a different target
     * than clark-service
     */
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.GET,
        path: "/guidelines/members",
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.PUT,
        path: "/guidelines/members/:memberId",
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.DELETE,
        path: "/guidelines/members/:memberId",
    },
    {
        method: HTTPMethod.GET,
        path: "/users/identifiers/active",
    },
    {
        method: HTTPMethod.GET,
        path: "/users/curators/:collection",
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.GET,
        path: "/collections/:colletionName/members",
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.PUT,
        path: "/collections/:colletionName/members/:memberId",
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.PATCH,
        path: "/collections/:colletionName/members/:memberId",
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.DELETE,
        path: "/collections/:collectionName/members/:memberId",
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.GET,
        path: "/users",
    },
    {
        method: HTTPMethod.POST,
        path: "/users",
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.PATCH,
        path: "/users",
    },
    {
        method: HTTPMethod.GET,
        path: "/users/stats",
    },
    {
        method: HTTPMethod.POST,
        path: "/users/tokens",
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.GET,
        path: "/users/:username/profile",
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.GET,
        path: "/users/:username/collections",
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.GET,
        path: "/users/tokens/refresh",
    },
    {
        method: HTTPMethod.GET,
        path: "/users/tokens",
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.DELETE,
        path: "/users/:username/tokens",
    },
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
        path: "/users/search",
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.GET,
        path: "/validate-captcha",
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.GET,
        path: "/users/:id/roles",
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:user",
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.GET,
        path: "/users",
    },
    {
        method: HTTPMethod.GET,
        path: "/keys",
    },
    {
        method: HTTPMethod.GET,
        path: "/google",
    },
    {
        method: HTTPMethod.GET,
        path: "/google/redirect",
    },
];
