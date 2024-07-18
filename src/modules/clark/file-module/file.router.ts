import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { FILE_ROUTES } from "./file.routes";
import { envConfig } from "../../../config/env/env.driver";
import { CLARK_SERVICE_URI } from "../../../config/global.env";

export class FileRouteHandler {
    public static build(): Router {
        return buildProxyRouter(
            FILE_ROUTES,
            envConfig.getUri(CLARK_SERVICE_URI),
        );
    }
}
