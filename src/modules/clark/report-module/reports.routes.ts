import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const REPORTS_ROUTES: ProxyRoute[] = [
    /**
     * The following routes have not been declared by
     * clark-service yet and will have a different target
     * than clark-service
     *
     * The target for the following routes shoud be clar reports lambda
     */
    {
        method: HTTPMethod.POST,
        path: "/reports",
        auth: true,
    },
    {
        method: HTTPMethod.GET,
        path: "/reports/top-downloads",
        auth: true,
    },
    {
        method: HTTPMethod.GET,
        path: "/reports/top-views",
        auth: true,
    },
    {
        method: HTTPMethod.GET,
        path: "/reports/top-downloaders",
        auth: true,
    },
    {
        method: HTTPMethod.GET,
        path: "/reports/top-topics",
        auth: true,
    },
    {
        method: HTTPMethod.GET,
        path: "/reports/top-tags",
        auth: true,
    },
];
