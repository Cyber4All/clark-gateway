import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const BUNDLING_ROUTES: ProxyRoute[] = [
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:learningObjectId/bundle",
        auth: true,
    },
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/:learningObjectId/bundle",
        auth: true,
    },
];
