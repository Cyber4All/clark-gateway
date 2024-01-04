import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

/**
 * TODO LIST for this file (chris): Go through each route and check if they need to be authenticated
 * this can be done by  checking whether these paths are matched in the unlessin the jwt.config.ts file
 */

export const LEARNING_OBJECTS_ROUTES: ProxyRoute[] = [
    /**
     * The following routes have not been declared by
     * clark-service yet and will have a different target
     * than clark-service
     *
     * The target for the following routes shoud be learning object service
     */

    /**
     * Changelog routes
     */
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.PATCH,
        path: "/users/:userId/learning-objects/:cuid/changelog",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.GET,
        path: "/users/:userId/learning-objects/:cuid/changelogs",
    },

    /**
     * Collection routes
     */
    {
        method: HTTPMethod.GET,
        path: "/collections/metrics",
    },
    {
        method: HTTPMethod.GET,
        path: "/collections/:name/meta",
    },
    {
        method: HTTPMethod.GET,
        path: "/collections",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:learningObjectId/collections",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.PATCH,
        path: "/users/:username/learning-objects/:cuid/collection",
    },

    /**
     * File Manager routes
     */
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.GET,
        path: "/users/:username/learning-objects/:id/bundle",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.POST,
        path: "/users/:username/learning-objects/:id/bundle",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.PATCH,
        path: "/users/:username/learning-objects/:learningObjectId/materials/files/:fileId",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.DELETE,
        path: "/users/:username/learning-objects/:learningObjectId/materials/files/:fileId",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:id/pdf",
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:username/learning-objects/:id/files/:fileId/download",
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:username/learning-objects/:id/materials",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.POST,
        path: "/users/:username/learning-objects/:id/materials/files",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.PATCH,
        path: "/users/:username/learning-objects/:id/files/bundle",
    },

    /**
     * Objects routes
     */
    {
        method: HTTPMethod.GET,
        path: "/users/:username/learning-objects/:id",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.PATCH,
        path: "/users/:username/learning-objects/:id",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.DELETE,
        path: "/users/:username/learning-objects/:id",
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:username/learning-objects/:id/children",
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:username/learning-objects/:id/parents",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/:username/:learningObjectName/children",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.POST,
        path: "/users/:username/hierarchy-object",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:username/:learningObjectName/children",
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:username/learning-objects",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.POST,
        path: "/users/:username/learning-objects",
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:username/learning-objects/profile",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.DELETE,
        path: "/learning-objects/multiple/:names",
    },
    {
        method: HTTPMethod.GET,
        path: "/learning-objects",
    },
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:learningObjectId",
    },
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:id/children/summary",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.GET,
        path: "/admin/learning-objects",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.PATCH,
        path: "/admin/learning-objects",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.GET,
        path: "/admin/learning-objects/:learningObjectId",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.DELETE,
        path: "/admin/users/:username/learning-objects/:learningObjectName",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.DELETE,
        path: "/admin/users/:username/learning-objects/multiple/:learningObjectIDs",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.POST,
        path: "/users/:userId/learning-objects/:learningObjectId/change-author",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.POST,
        path: "/users/:username/learning-objects/:id/status",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:username/:learningObjectName",
    },

    /**
     * Outcomes routes
     */
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/:learningObjectId/learning-outcomes",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:learningObjectId/learning-outcomes/:outcomeId",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.DELETE,
        path: "/learning-objects/:learningObjectId/learning-outcomes/:outcomeId",
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:username/learning-objects/:learningObjectId/outcomes",
    },

    /**
     * Relevancy routes
     */
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.PATCH,
        path: "/users/:username/learning-objects/:id/relevancy-check",
    },
    {
        method: HTTPMethod.GET,
        path: "/topics",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.PATCH,
        path: "/users/:username/learning-objects/:id/learning-outcomes/:outcomeId/guidelines",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.PATCH,
        path: "/users/:username/learning-objects/:id/topics",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.DELETE,
        path: "/users/:username/learning-objects/:id/topics/:topicId",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/evaluators",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.PATCH,
        path: "/users/:username/learning-objects/:cuid/evaluation",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/evaluators",
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:username/evaluations",
    },

    /**
     * Revisions routes
     */
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.POST,
        path: "/users/:username/learning-objects/:cuid/versions",
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:username/learning-objects/:learningObjectId/revisions/:revisionId",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.DELETE,
        path: "/users/:username/learning-objects/:cuid/versions/:version",
    },

    /**
     * Stats routes
     */
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/stats",
    },

    /**
     * Submissions routes
     */
    {
        method: HTTPMethod.GET,
        path: "/users/:userId/learning-objects/:learningObjectId/submissions",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.POST,
        path: "/users/:userId/learning-objects/:learningObjectId/submissions",
    },
    // TODO: Make this route authenticated
    {
        method: HTTPMethod.DELETE,
        path: "/users/:userId/learning-objects/:learningObjectId/submissions",
    },
];
