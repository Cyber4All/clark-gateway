import { Router } from "express";
import { CLARK_SERVICE_URI } from "../../../config/global.env";
import { envConfig } from "../../../config/env/env.driver";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { PLAYLIST_ROUTES } from "./playlist.routes";

export class PlaylistRouteHandler {
    public static build(): Router {
        return buildProxyRouter(
            PLAYLIST_ROUTES,
            envConfig.getUri(CLARK_SERVICE_URI),
        );
    }
}
