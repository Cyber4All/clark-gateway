import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { CLARK_SERVICE_URI } from "../../../config/global.env";
import { envConfig } from "../../../config/env/env.driver";
import { ORGANIZATION_ROUTES } from "./organization.routes";

export class OrganizationRouteHandler {
    public static build(): Router {
        return buildProxyRouter(
            ORGANIZATION_ROUTES,
            envConfig.getUri(CLARK_SERVICE_URI),
        );
    }
}
