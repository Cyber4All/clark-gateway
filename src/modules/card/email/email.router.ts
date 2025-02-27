import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { CARD_SERVICE_URI } from "../../../config/global.env";
import { envConfig } from "../../../config/env/env.driver";
import { EMAIL_ROUTES } from "./email.routes";

export class EmailRouteHandler {
    public static build(): Router {
        return buildProxyRouter(
            EMAIL_ROUTES,
            envConfig.getUri(CARD_SERVICE_URI),
        );
    }
}
