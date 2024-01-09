import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { FEATURED_ROUTES } from "./featured.routes";
import { envConfig } from "../../../config/env/env.driver";
import { CLARK_SERVICE_URI } from "../../../config/global.env";

export class FeaturedRouteHandler {
    public static build(): Router {
        return buildProxyRouter(
            FEATURED_ROUTES,
            envConfig.getUri(CLARK_SERVICE_URI),
        );
    }
}
