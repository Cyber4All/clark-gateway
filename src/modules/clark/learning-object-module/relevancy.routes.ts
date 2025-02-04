import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const RELEVANCY_ROUTES: ProxyRoute[] = [
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:id/learning-outcomes/:outcomeId/guidelines",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:id/relevancy-check",
        auth: true,
    },
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/:cuid/ask-clair"
    }
];
