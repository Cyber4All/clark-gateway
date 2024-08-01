import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const LEARNING_OBJECTS_ROUTES: ProxyRoute[] = [
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:cuid",
    },
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:learningObjectId/children",
    },
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:learningObjectId/parents",
    },
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:learningObjectId/materials",
        auth: true,
    },
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/:learningObjectId/status",
        auth: true,
    },
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/:learningObjectId/children",
        auth: true,
    },
    {
        method: HTTPMethod.POST,
        path: "/learning-objects",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:cuid/collection",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:learningObjectId",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:learningObjectId/children",
        auth: true,
    },
    {
        method: HTTPMethod.DELETE,
        path: "/learning-objects/:learningObjectId",
        auth: true,
    },
];
