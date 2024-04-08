import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { UTILITY_ROUTES } from "./utility.routes";
import { envConfig } from "../../../config/env/env.driver";
import { CLARK_SERVICE_URI } from "../../../config/global.env";

export class UtilityRouteHandler {
    public static build(): Router {
        return buildProxyRouter(
            UTILITY_ROUTES,
            envConfig.getUri(CLARK_SERVICE_URI),
        );
    }
}
