/* eslint-disable @typescript-eslint/no-unused-vars --
    This disable is added to ignore the 'req' in this.proxyRequest */
import { Router } from 'express';
import proxy = require('express-http-proxy');
import { Request } from 'express';
import { Controller } from '../../interfaces/Controller';

const UTILITY_API = process.env.UTILITY_URI || 'localhost:9000';
const DOWNTIME_LAMBDA = process.env.DOWNTIME_LAMBDA_URI;

export class UtilityServiceController implements Controller {
  buildRouter(): Router {
    const router = Router();

    /**
     * @swagger
     * /downtime:
     *  get:
     *     description: Gets the downtime status for clark
     *     tags:
     *        - Secured Downtime Service
     *     responses:
     *       200:
     *        description: OK - Returns the downtime status as an object with message and isDown
     *        content:
     *          application/json:
     *              schema:
     *                  $ref: '#/components/schemas/Downtime'
     */
    router.get(
      '/downtime',
      this.proxyRequestToLambda(
        (req: Request) =>
          `/downtime?service=${encodeURIComponent(
            req.query.service as string,
          )}`,
      ),
    );

    /**
     * @swagger
     * /clientversion/{clientVersion}:
     *  get:
     *      description: Gets the client version to see if there is an update
     *      tags:
     *          - Utility Service
     *      parameters:
     *          - in: path
     *            name: clientVersion
     *            schema:
     *                type: string
     *            required: true
     *            description: The version of the client
     *      responses:
     *          200:
     *              description: OK
     *          401:
     *              description: UNAUTHENTICATED - Thrown when no clientVersion is in params
     *          426:
     *              description: Thrown when the client version is not accurate
     *          500:
     *              description: INTERNAL - Could not recover the client version
     */
    router.get(
      '/clientversion/:clientVersion',
      this.proxyRequest(
        (req: Request) =>
          `/clientversion/${encodeURIComponent(req.params.clientVersion)}`,
      ),
    );

    /**
     * @swagger
     * /blogs:
     *  get:
     *      description: Gets the blogs to display to the user
     *      tags:
     *          - Utility Service
     *      parameters:
     *          - in: query
     *            name: recent
     *            schema:
     *              type: boolean
     *            required: false
     *            description: Whether the most recent blog should be returned or all blogs should be returned
     *      responses:
     *          200:
     *              description: OK - Returns array of blog(s)
     *              content:
     *                  application/json:
     *                      type: array
     *                      items:
     *                          $ref: '#/components/schemas/Blog'
     *          500:
     *              description: INTERNAL - Unable to get blogs
     */
    router.get(
      '/blogs',
      this.proxyRequest(
        (req: Request) =>
          `/blogs?recent=${encodeURIComponent(req.query.recent as string)}`,
      ),
    );
    return router;
  }

  private proxyRequest(callback: any) {
    return proxy(UTILITY_API, {
      proxyReqPathResolver: (req) => {
        return callback(req);
      },
    });
  }

  private proxyRequestToLambda(callback: any) {
    return proxy(DOWNTIME_LAMBDA, {
      proxyReqPathResolver: (req) => {
        return callback(req);
      },
    });
  }
}
