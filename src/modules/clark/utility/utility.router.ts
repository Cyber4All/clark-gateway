import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { UTILITY_ROUTES } from "./utility.routes";

export class UtilityRouteHandler {
    public static build(): Router {
        return buildProxyRouter(UTILITY_ROUTES);
    }
}