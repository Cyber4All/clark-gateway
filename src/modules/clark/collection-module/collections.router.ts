import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { COLLECTION_ROUTES } from "./collections.routes";
import { envConfig } from "../../../config/env/env.driver";
import { CLARK_SERVICE_URI } from "../../../config/global.env";

export class CollectionsRouteHandler {
    public static build(): Router {
        return buildProxyRouter(
            COLLECTION_ROUTES,
            envConfig.getUri(CLARK_SERVICE_URI),
        );
    }
}
