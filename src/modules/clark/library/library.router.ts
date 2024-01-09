import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { LIBRARY_ROUTES } from "./library.routes";
import { envConfig } from "../../../config/env/env.driver";
import { CLARK_SERVICE_URI } from "../../../config/global.env";

export class LibraryRouteHandler {
    public static build(): Router {
        return buildProxyRouter(
            LIBRARY_ROUTES,
            envConfig.getUri(CLARK_SERVICE_URI),
        );
    }
}
