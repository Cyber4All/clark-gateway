import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const REVISIONS_ROUTES: ProxyRoute[] = [
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/:cuid/versions",
        auth: true,
    },
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/:cuid/versions/story",
        auth: true
    },
    {
        method: HTTPMethod.DELETE,
        path: "/learning-objects/:cuid/versions/:version",
        auth: true,
    },
];
