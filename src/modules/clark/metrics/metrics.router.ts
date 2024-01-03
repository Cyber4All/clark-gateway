import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";

export class MetricsRouteHandler {
    public static build(): Router {
        return buildProxyRouter(METRICS_ROUTES);
    }
}