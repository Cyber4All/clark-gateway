import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { USERS_ROUTES } from "./users.routes";

export class UsersRouteHandler {
    public static build(): Router {
        return buildProxyRouter(USERS_ROUTES);
    }
}