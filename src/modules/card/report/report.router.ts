import { Router } from 'express';
import { buildProxyRouter } from '../../../shared/functions/build-proxy-router';
import { CLARK_REPORTS_URI } from '../../../config/global.env';
import { envConfig } from '../../../config/env/env.driver';
import { REPORT_ROUTES } from './report.routes';

export class ReportRouter {
    public static build(): Router {
        return buildProxyRouter(
            REPORT_ROUTES,
            envConfig.getUri(CLARK_REPORTS_URI),
        );
    }
}
