import { envConfig } from "../../../config/env/env.driver";
import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";
import { LEARNING_OBJECT_SERVICE_URI } from "../../../config/global.env";

export const LEGACY_ROUTES: ProxyRoute[] = [
    /**
     * Evaluations routes
     */
    // @deprecated
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/evaluators",
        auth: true,
        target: envConfig.getUri(LEARNING_OBJECT_SERVICE_URI),
    },
    // @deprecated
    {
        method: HTTPMethod.PATCH,
        path: "/users/:username/learning-objects/:cuid/evaluation",
        auth: true,
        target: envConfig.getUri(LEARNING_OBJECT_SERVICE_URI),
    },
    // @deprecated
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/evaluators",
        auth: true,
        target: envConfig.getUri(LEARNING_OBJECT_SERVICE_URI),
    },
    // @deprecated
    {
        method: HTTPMethod.GET,
        path: "/users/:username/evaluations",
        target: envConfig.getUri(LEARNING_OBJECT_SERVICE_URI),
    },
];
