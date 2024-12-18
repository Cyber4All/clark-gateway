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
        method: HTTPMethod.GET,
        path: "/users/:username/collections",
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:username/fileAccessId",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/users/:username",
        auth: true,
    },
];
