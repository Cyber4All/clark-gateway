import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { LEARNING_OBJECTS_ROUTES } from "./learning-objects.routes";

export class LearningObjectsRouteHandler {
    public static build(): Router {
        return buildProxyRouter(LEARNING_OBJECTS_ROUTES);
    }
}