import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const ORGANIZATION_ROUTES: ProxyRoute[] = [
    {
        method: HTTPMethod.GET,
        path: "/organizations",
    },
];
