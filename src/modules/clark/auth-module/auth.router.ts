import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { CLARK_SERVICE_URI } from "../../../config/global.env";
import { envConfig } from "../../../config/env/env.driver";
import { AUTH_ROUTES } from "./auth.routes";

export class AuthRouteHandler {
    public static build(): Router {
        return buildProxyRouter(
            AUTH_ROUTES,
            envConfig.getUri(CLARK_SERVICE_URI),
        );
    }
}
