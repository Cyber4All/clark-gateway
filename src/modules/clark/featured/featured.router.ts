import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/proxy";
import { FEATURED_ROUTES } from "./featured.routes";

export class FeaturedRouteHandler {
    public static build(): Router {
        return buildProxyRouter(FEATURED_ROUTES);
    }
}