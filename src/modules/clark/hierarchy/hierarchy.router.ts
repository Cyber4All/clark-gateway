import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/proxy";
import { HIERARCHY_ROUTES } from "./hierarchy.routes";

export class HierarchydRouteHandler {
    public static build(): Router {
        return buildProxyRouter(HIERARCHY_ROUTES);
    }
}
