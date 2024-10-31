import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { CARD_SERVICE_URI } from "../../../config/global.env";
import { envConfig } from "../../../config/env/env.driver";
import { UTILITY_ROUTES } from "./utility.routes";

export class UtilityRouteHandler {
    public static build(): Router {
        return buildProxyRouter(
            UTILITY_ROUTES,
            envConfig.getUri(CARD_SERVICE_URI),
        );
    }
}
