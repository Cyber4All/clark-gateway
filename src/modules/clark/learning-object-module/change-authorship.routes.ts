import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const CHANGE_AUTHORSHIP_ROUTES: ProxyRoute[] = [
    {
        method: HTTPMethod.POST,
        path: "/users/:userId/learning-objects/:learningObjectId/change-author",
        auth: true,
    },
];
