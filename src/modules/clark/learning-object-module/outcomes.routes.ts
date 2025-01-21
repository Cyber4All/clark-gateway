import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const OUTCOMES_ROUTES: ProxyRoute[] = [
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:learningObjectId/outcomes",
    },
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/:learningObjectId/learning-outcomes",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-outcomes/:outcomeId",
        auth: true,
    },
    {
        method: HTTPMethod.DELETE,
        path: "/learning-outcomes/:outcomeId",
        auth: true,
    },
    {
        method: HTTPMethod.GET,
        path: "learning-outcomes/stats",
        auth: true,
    },
];
