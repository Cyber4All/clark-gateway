import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const TOPICS_ROUTES: ProxyRoute[] = [
    {
        method: HTTPMethod.GET,
        path: "/topics",
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:id/topics",
        auth: true,
    },
    /**
     * DELETE METHOD NOT YET IMPLEMENTED IN CLARK-SERVICE
     */
    {
        method: HTTPMethod.DELETE,
        path: "/users/:username/learning-objects/:id/topics/:topicId",
        auth: true,
    },
];
