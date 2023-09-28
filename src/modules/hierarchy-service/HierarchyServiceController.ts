import { Controller } from '../../interfaces/Controller';
import { Router, Request } from 'express';
import proxy = require('express-http-proxy');
import { LEARNING_OBJECT_ROUTES } from '../../routes';

const HIERARCHY_API = process.env.HIERARCHY_API || 'localhost:6000';

export class HierarchyServiceController implements Controller {
  buildRouter(): Router {
    const router = Router();

    /**
     * @swagger
     * /learning-objects/{id}/status:
     * patch:
     *    description: Change hierarchy status
     *    tags:
     *      - Hierarchy Service
     *    parameters:
     *      - in: path
     *        name: id
     *        schema:
     *            type: string
     *        required: true
     *        description: the id of the learning object
     *    requestBody:
     *        description: The cuid, version, and author's username
     *        required: true
     *        content:
     *            application/json:
     *                schema:
     *                    type: object
     *                    properties:
     *                        status:
     *                            type: string
     *                            description: the status to change too
     *                            required: true
     *                            example: "released"
     *                        collection:
     *                            type: string
     *                            description: the collection of the learing object, only used for submitting an object for review
     *                            required: false
     *                            example: "nccp"
     *    responses:
     *        200:
     *            description: OK
     *        400:
     *            description: INVALID - Incorrect object status or id is not a mongo object id
     *        401:
     *            description: UNAUTHENTICATED - User not logged in
     *        403:
     *            description: UNAUTHORIZED - User is not author (unreleased -> waiting) or privileged access group (other status moves)
     *        404:
     *            description: NOT FOUND - 	Learning object not found
     */
    router.patch(
      '/learning-objects/:id/status',
      this.proxyRequest((req: Request) =>
        LEARNING_OBJECT_ROUTES.CHANGE_HIERARCHY_STATUS(req.params.id),
      ),
    );

    return router;
  }

  private proxyRequest(callback: any) {
    return proxy(HIERARCHY_API, {
      proxyReqPathResolver: (req) => {
        return callback(req);
      },
    });
  }
}
