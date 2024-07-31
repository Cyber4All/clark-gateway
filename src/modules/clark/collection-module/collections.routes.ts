import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const COLLECTION_ROUTES: ProxyRoute[] = [
    {
        method: HTTPMethod.GET,
        path: "/collections",
    },
    {
        method: HTTPMethod.GET,
        path: "/collections/:abvName",
    },
];
