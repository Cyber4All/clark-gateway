import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { HIERARCHY_ROUTES } from "./hierarchy.routes";
import { HIERARCHY_SERVICE_URI } from "../../../config/global.env";
import { envConfig } from "../../../config/env/env.driver";

export class HierarchydRouteHandler {
    public static build(): Router {
        return buildProxyRouter(
            HIERARCHY_ROUTES,
            envConfig.getUri(HIERARCHY_SERVICE_URI),
        );
    }
}
