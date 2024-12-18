import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const SUBMISSIONS_ROUTES: ProxyRoute[] = [
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:learningObjectId/submissions",
        auth: true,
    },
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/:learningObjectId/submissions",
        auth: true,
    },
    {
        method: HTTPMethod.DELETE,
        path: "/learning-objects/:learningObjectId/submissions",
        auth: true,
    },
];
