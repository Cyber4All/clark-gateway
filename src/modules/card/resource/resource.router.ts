import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { CARD_SERVICE_URI } from "../../../config/global.env";
import { envConfig } from "../../../config/env/env.driver";
import { RESOURCE_ROUTES } from "./resource.routes";

export class ResourceRouter {
    public static build(): Router {
        return buildProxyRouter(
            RESOURCE_ROUTES,
            envConfig.getUri(CARD_SERVICE_URI),
        );
    }
}
