import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { STANDARD_GUIDELINES_ROUTES } from "./standard-guidelines.routes";

export class StandardGuidelinesRouteHandler {
    public static build(): Router {
        return buildProxyRouter(STANDARD_GUIDELINES_ROUTES);
    }
}