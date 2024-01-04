import { HTTPMethod } from "./http-method.type";

export interface ProxyRoute {
    // HTTP method to be matched by the router
    method: HTTPMethod;

    // Path to be matched by the router
    path: string;

    // Determines whether the route should be authenticated with a middleware
    auth?: boolean;

    // URL string that will override the target set by the module
    target?: string;
}
