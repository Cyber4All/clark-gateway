import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const UTILITY_ROUTES: ProxyRoute[] = [
    {
        method: HTTPMethod.GET,
        path: "/downtime",
    },
];
