import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const METRICS_ROUTES: ProxyRoute[] = [
    {
        method: HTTPMethod.GET,
        path: "/metrics",
    },
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/metrics",
    },
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/stats",
    },
    {
        method: HTTPMethod.GET,
        path: "/users/metrics",
    },
    {
        method: HTTPMethod.GET,
        path: "/tags/:tagId/metrics"
    }
];
