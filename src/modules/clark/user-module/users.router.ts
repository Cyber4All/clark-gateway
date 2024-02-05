import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { USERS_ROUTES } from "./users.routes";
import { envConfig } from "../../../config/env/env.driver";
import { CLARK_SERVICE_URI } from "../../../config/global.env";

export class UsersRouteHandler {
    public static build(): Router {
        return buildProxyRouter(
            USERS_ROUTES,
            envConfig.getUri(CLARK_SERVICE_URI),
        );
    }
}
