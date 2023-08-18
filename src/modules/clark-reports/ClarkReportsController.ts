import { Request, Router } from "express";
import proxy = require("express-http-proxy");
import { Controller } from "../../interfaces/Controller";
import { REPORTS_ROUTES } from "../../routes";

const CLARK_REPORTS_API = process.env.CLARK_REPORTS_LAMBDA_URI;

export class ClarkReportsController implements Controller {
  buildRouter(): Router {
    const router = Router();

    router
      .route("/reports")
      .get(
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
