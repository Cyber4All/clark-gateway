import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { RATINGS_ROUTES } from "./ratings.routes";

export class RatingsRouteHandler {
    public static build(): Router {
        return buildProxyRouter(RATINGS_ROUTES);
    }
}