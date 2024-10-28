import { Router } from 'express';
import { buildProxyRouter } from '../../../shared/functions/build-proxy-router';
import { CARD_SERVICE_URI } from '../../../config/global.env';
import { envConfig } from '../../../config/env/env.driver';
import { UPDATE_ROUTES } from './update.routes';

export class UpdateRouter {
    public static build(): Router {
        return buildProxyRouter(
            UPDATE_ROUTES,
            envConfig.getUri(CARD_SERVICE_URI),
        );
    }
}