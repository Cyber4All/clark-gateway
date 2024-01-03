import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const METRICS_ROUTES: ProxyRoute[] = [
    // TODO: Manually test these routes once they are implemented in clark-service
    // The following routes have been declared in clark-service but not yet implemented
    {
        method: HTTPMethod.GET,
        path: "/metrics"
    },
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/metrics"
    }
];