import { Request, Router } from 'express';
import proxy = require('express-http-proxy');
import { Controller } from '../../interfaces/Controller';
import { REPORTS_ROUTES } from '../../routes';

const CLARK_REPORTS_API =
  process.env.CLARK_REPORTS_LAMBDA_URI || 'localhost:3008';

export class ClarkReportsController implements Controller {
  buildRouter(): Router {
    const router = Router();

    /**
     * @swagger
     * /reports:
     * patch:
     *    description: Get all reports
     *    tags:
     *      - Clark Reports
     *    responses:
     *        200:
     *            description: OK
     *        400:
     *            description: INVALID - Invalid request for Missing email or name in body
     */
    router
      .route('/reports')
      .post(
        this.proxyLambdaRequest((req: Request) => REPORTS_ROUTES.GET_REPORTS),
      );

    return router;
  }

  private proxyLambdaRequest(callback: any) {
    return proxy(CLARK_REPORTS_API, {
      proxyReqPathResolver: (req) => {
        return callback(req);
      },
    });
  }
}
