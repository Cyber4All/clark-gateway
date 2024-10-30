import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { CARD_SERVICE_URI } from "../../../config/global.env";
import { envConfig } from "../../../config/env/env.driver";
import { SEARCH_ROUTES } from "./search.routes";

export class SearchRouteHandler {
    public static build(): Router {
        console.log('SearchRouteHandler.build()');
        return buildProxyRouter(
            SEARCH_ROUTES,
            envConfig.getUri(CARD_SERVICE_URI),
        );
    }
}
