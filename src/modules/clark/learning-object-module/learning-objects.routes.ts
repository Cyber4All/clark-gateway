import { envConfig } from "../../../config/env/env.driver";
import { CLARK_SERVICE_URI } from "../../../config/global.env";
import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const LEARNING_OBJECTS_ROUTES: ProxyRoute[] = [
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:cuid",
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:learningObjectId/children",
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:learningObjectId/parents",
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:learningObjectId/materials",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/:learningObjectId/status",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/:learningObjectId/children",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.POST,
        path: "/learning-objects",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:cuid/collection",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:learningObjectId",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:learningObjectId/children",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.DELETE,
        path: "/learning-objects/:learningObjectId",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    /**
     * Evaluations routes
     */
    // @deprecated
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/evaluators",
        auth: true,
    },
    // @deprecated
    {
        method: HTTPMethod.PATCH,
        path: "/users/:username/learning-objects/:cuid/evaluation",
        auth: true,
    },
    // @deprecated
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/evaluators",
        auth: true,
    },
    // @deprecated
    {
        method: HTTPMethod.GET,
        path: "/users/:username/evaluations",
    },
];
