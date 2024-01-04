import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { METRICS_ROUTES } from "./metrics.routes";

export class MetricsRouteHandler {
    public static build(): Router {
        return buildProxyRouter(METRICS_ROUTES);
    }
}
