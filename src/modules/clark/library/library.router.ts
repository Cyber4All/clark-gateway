import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { LIBRARY_ROUTES } from "./library.routes";

export class LibraryRouteHandler {
    public static build(): Router {
        return buildProxyRouter(LIBRARY_ROUTES);
    }
}