import { envConfig } from "../../../config/env/env.driver";
import { CLARK_SERVICE_URI } from "../../../config/global.env";
import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const LEARNING_OBJECTS_ROUTES: ProxyRoute[] = [
    /**
     * The following routes have not been declared by
     * clark-service yet and will have a different target
     * than clark-service
     *
     * The target for the following routes shoud be learning object service
     */
    // METHOD NOT IMPLEMENTED IN CLARK-SERVICE
    {
        method: HTTPMethod.GET,
        path: "/collections/metrics",
    },
    // METHOD NOT IMPLEMENTED IN CLARK-SERVICE
    {
        method: HTTPMethod.GET,
        path: "/collections/:name/meta",
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:learningObjectId/collections",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:cuid/collection",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },

    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:learningObjectId/materials",
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },

    /**
     * Objects routes
     */
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:cuid",
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:learningObjectId",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.DELETE,
        path: "/learning-objects/:learningObjectId",
        auth: true,
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
        method: HTTPMethod.POST,
        path: "/learning-objects/:learningObjectId/children",
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
        method: HTTPMethod.POST,
        path: "/learning-objects",
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
        method: HTTPMethod.GET,
        path: "/learning-objects/:learningObjectId",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        // DEPRECATED
        method: HTTPMethod.GET,
        path: "/learning-objects/:learningObjectId/children/summary",
    },
    {
        method: HTTPMethod.GET,
        path: "/admin/learning-objects",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/admin/learning-objects",
        auth: true,
    },
    {
        method: HTTPMethod.GET,
        path: "/admin/learning-objects/:learningObjectId",
        auth: true,
    },
    // METHOD NOT IMPLEMENTED IN CLARK-SERVICE
    {
        method: HTTPMethod.PATCH,
        path: "/learning-outcomes/:outcomeId",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:username/:learningObjectName",
        auth: true,
    },
    // METHOD NOT IMPLEMENTED IN CLARK-SERVICE
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/evaluators",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/users/:username/learning-objects/:cuid/evaluation",
        auth: true,
    },
    // METHOD NOT IMPLEMENTED IN CLARK-SERVICE
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/evaluators",
        auth: true,
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:username/evaluations",
    },
];
