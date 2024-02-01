import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const LIBRARY_ROUTES: ProxyRoute[] = [
    {
        method: HTTPMethod.GET,
        path: "/users/:username/library",
        auth: true,
    },
    {
        method: HTTPMethod.POST,
        path: "/users/:username/library",
        auth: true,
    },
    {
        method: HTTPMethod.DELETE,
        path: "/users/:username/library/:id",
        auth: true,
    },
];
