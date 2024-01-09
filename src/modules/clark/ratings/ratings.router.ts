import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { RATINGS_ROUTES } from "./ratings.routes";
import { CLARK_SERVICE_URI } from "../../../config/global.env";
import { envConfig } from "../../../config/env/env.driver";

export class RatingsRouteHandler {
    public static build(): Router {
        return buildProxyRouter(
            RATINGS_ROUTES,
            envConfig.getUri(CLARK_SERVICE_URI),
        );
    }
}
