import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { CARD_SERVICE_URI } from "../../../config/global.env";
import { envConfig } from "../../../config/env/env.driver";
import { REPORT_ROUTES } from "./report.routes";

export class ReportRouter {
    public static build(): Router {
        return buildProxyRouter(
            REPORT_ROUTES,
            envConfig.getUri(CARD_SERVICE_URI),
        );
    }
}
