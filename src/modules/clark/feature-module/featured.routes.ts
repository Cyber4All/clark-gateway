import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const FEATURED_ROUTES: ProxyRoute[] = [
    {
        method: HTTPMethod.GET,
        path: "/featured/learning-objects",
    },
    {
        method: HTTPMethod.PATCH,
        path: "/featured/learning-objects",
    },
    {
        method: HTTPMethod.PATCH,
        path: "/featured/learning-objects/:collectionAbvName",
    },
];
