import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const HIERARCHY_ROUTES: ProxyRoute[] = [
    {
        method: HTTPMethod.POST,
        path: "/hierarchy-object",
        auth: true,
    },
];
