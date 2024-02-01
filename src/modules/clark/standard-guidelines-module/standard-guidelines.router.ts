import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { STANDARD_GUIDELINES_ROUTES } from "./standard-guidelines.routes";
import { envConfig } from "../../../config/env/env.driver";
import { STANDARD_GUIDELINES_SERVICE_URI } from "../../../config/global.env";

export class StandardGuidelinesRouteHandler {
    public static build(): Router {
        return buildProxyRouter(
            STANDARD_GUIDELINES_ROUTES,
            envConfig.getUri(STANDARD_GUIDELINES_SERVICE_URI),
        );
    }
}
