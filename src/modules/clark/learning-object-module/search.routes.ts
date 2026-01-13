import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const SEARCH_ROUTES: ProxyRoute[] = [
    {
        method: HTTPMethod.GET,
        path: "/learning-objects",
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:username/learning-objects",
    },
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/name/check/:name"
    }
];
