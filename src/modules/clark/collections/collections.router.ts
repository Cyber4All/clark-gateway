import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { COLLECTION_ROUTES } from "./collections.routes";

export class CollectionsRouteHandler {
    public static build(): Router {
        return buildProxyRouter(COLLECTION_ROUTES);
    }
}
