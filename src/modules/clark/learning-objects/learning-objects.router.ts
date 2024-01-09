import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { LEARNING_OBJECTS_ROUTES } from "./learning-objects.routes";
import { envConfig } from "../../../config/env/env.driver";
import { LEARNING_OBJECT_SERVICE_URI } from "../../../config/global.env";

export class LearningObjectsRouteHandler {
    public static build(): Router {
        return buildProxyRouter(
            LEARNING_OBJECTS_ROUTES,
            envConfig.getUri(LEARNING_OBJECT_SERVICE_URI),
        );
    }
}
