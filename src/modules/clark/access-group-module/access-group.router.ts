import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { ACCESS_GROUP_ROUTES } from "./access-group.routes";
import { CLARK_SERVICE_URI } from "../../../config/global.env";
import { envConfig } from "../../../config/env/env.driver";

export class AccessGroupRouteHandler {
    public static build(): Router {
        return buildProxyRouter(
            ACCESS_GROUP_ROUTES,
            envConfig.getUri(CLARK_SERVICE_URI),
        );
    }
}