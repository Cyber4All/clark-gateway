import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { NOTIFICATIONS_ROUTES } from "./notifications.routes";

export class NotificationsRouteHandler {
    public static build(): Router {
        return buildProxyRouter(NOTIFICATIONS_ROUTES);
    }
}