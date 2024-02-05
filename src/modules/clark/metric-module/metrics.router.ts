import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { METRICS_ROUTES } from "./metrics.routes";
import { CLARK_SERVICE_URI } from "../../../config/global.env";
import { envConfig } from "../../../config/env/env.driver";

export class MetricsRouteHandler {
    public static build(): Router {
        return buildProxyRouter(
            METRICS_ROUTES,
            envConfig.getUri(CLARK_SERVICE_URI),
        );
    }
}
