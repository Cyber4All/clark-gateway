import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/proxy";
import { STANDARD_GUIDELINES_ROUTES } from "./standard-guidelines.routes";

export class StandardGuidelinesRouteHandler {
    public static build(): Router {
        return buildProxyRouter(STANDARD_GUIDELINES_ROUTES);
    }
}
