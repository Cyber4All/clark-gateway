import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const LIBRARY_ROUTES: ProxyRoute[] = [
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.GET,
        path: "/users/:username/library"
    },
    // TODO: Make this route an authenticated route
    // ** There is currently a bug in clark-service that doesn't check
    // for authentication on this route **
    {
        method: HTTPMethod.POST,
        path: "/users/:username/library"
    },
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.DELETE,
        path: "/users/:username/library/:id"
    }
];