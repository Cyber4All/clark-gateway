import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { envConfig } from "../../../config/env/env.driver";
import { CHATBOT_ROUTES } from "./chatbot.routes";
import { CLARK_SERVICE_URI } from "../../../config/global.env";

export class ChatBotRouteHandler {
    public static build(): Router {
        return buildProxyRouter(
            CHATBOT_ROUTES,
            envConfig.getUri(CLARK_SERVICE_URI),
        );
    }
}