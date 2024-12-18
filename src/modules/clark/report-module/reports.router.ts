import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { REPORTS_ROUTES } from "./reports.routes";
import { CLARK_SERVICE_URI } from "../../../config/global.env";
import { envConfig } from "../../../config/env/env.driver";

export class ReportsRouteHandler {
    public static build(): Router {
        return buildProxyRouter(
            REPORTS_ROUTES,
            envConfig.getUri(CLARK_SERVICE_URI),
        );
    }
}
