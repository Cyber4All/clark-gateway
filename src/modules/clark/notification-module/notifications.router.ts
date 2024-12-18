import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { NOTIFICATIONS_ROUTES } from "./notifications.routes";
import { NOTIFICATIONS_SERVICE_URI } from "../../../config/global.env";
import { envConfig } from "../../../config/env/env.driver";

export class NotificationsRouteHandler {
    public static build(): Router {
        return buildProxyRouter(
            NOTIFICATIONS_ROUTES,
            envConfig.getUri(NOTIFICATIONS_SERVICE_URI),
        );
    }
}
