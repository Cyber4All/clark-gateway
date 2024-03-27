import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

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
    {
        method: HTTPMethod.PATCH,
        path: "/users/:userId/learning-objects/:cuid/changelog",
        auth: true,
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:userId/learning-objects/:cuid/changelogs",
        auth: true,
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
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:learningObjectId/collections",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/users/:username/learning-objects/:cuid/collection",
        auth: true,
    },

    /**
     * File Manager routes
     */
    {
        method: HTTPMethod.GET,
        path: "/users/:username/learning-objects/:id/bundle",
        auth: true,
    },
    {
        method: HTTPMethod.POST,
        path: "/users/:username/learning-objects/:id/bundle",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/users/:username/learning-objects/:learningObjectId/materials/files/:fileId",
        auth: true,
    },
    {
        method: HTTPMethod.DELETE,
        path: "/users/:username/learning-objects/:learningObjectId/materials/files/:fileId",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:id/pdf",
        auth: true,
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:username/learning-objects/:id/files/:fileId/download",
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:username/learning-objects/:id/materials",
    },
    {
        method: HTTPMethod.POST,
        path: "/users/:username/learning-objects/:id/materials/files",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/users/:username/learning-objects/:id/files/bundle",
        auth: true,
    },

    /**
     * Objects routes
     */
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:cuid",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/users/:username/learning-objects/:id",
        auth: true,
    },
    {
        method: HTTPMethod.DELETE,
        path: "/users/:username/learning-objects/:id",
        auth: true,
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:username/learning-objects/:id/children",
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:username/learning-objects/:id/parents",
    },
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/:username/:learningObjectName/children",
        auth: true,
    },
    {
        method: HTTPMethod.POST,
        path: "/users/:username/hierarchy-object",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:username/:learningObjectName/children",
        auth: true,
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:username/learning-objects",
        auth: true,
    },
    {
        method: HTTPMethod.POST,
        path: "/users/:username/learning-objects",
        auth: true,
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:username/learning-objects/profile",
    },
    {
        method: HTTPMethod.DELETE,
        path: "/learning-objects/multiple/:names",
        auth: true,
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
    {
        method: HTTPMethod.GET,
        path: "/admin/learning-objects",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/admin/learning-objects",
        auth: true,
    },
    {
        method: HTTPMethod.GET,
        path: "/admin/learning-objects/:learningObjectId",
        auth: true,
    },
    {
        method: HTTPMethod.DELETE,
        path: "/admin/users/:username/learning-objects/:learningObjectName",
        auth: true,
    },
    {
        method: HTTPMethod.DELETE,
        path: "/admin/users/:username/learning-objects/multiple/:learningObjectIDs",
        auth: true,
    },
    {
        method: HTTPMethod.POST,
        path: "/users/:userId/learning-objects/:learningObjectId/change-author",
        auth: true,
    },
    {
        method: HTTPMethod.POST,
        path: "/users/:username/learning-objects/:id/status",
        auth: true,
    },
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:username/:learningObjectName",
        auth: true,
    },

    /**
     * Outcomes routes
     */
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/:learningObjectId/learning-outcomes",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:learningObjectId/learning-outcomes/:outcomeId",
        auth: true,
    },
    {
        method: HTTPMethod.DELETE,
        path: "/learning-objects/:learningObjectId/learning-outcomes/:outcomeId",
        auth: true,
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:username/learning-objects/:learningObjectId/outcomes",
    },

    /**
     * Relevancy routes
     */
    {
        method: HTTPMethod.PATCH,
        path: "/users/:username/learning-objects/:id/relevancy-check",
        auth: true,
    },
    {
        method: HTTPMethod.GET,
        path: "/topics",
    },
    {
        method: HTTPMethod.PATCH,
        path: "/users/:username/learning-objects/:id/learning-outcomes/:outcomeId/guidelines",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/users/:username/learning-objects/:id/topics",
        auth: true,
    },
    {
        method: HTTPMethod.DELETE,
        path: "/users/:username/learning-objects/:id/topics/:topicId",
        auth: true,
    },
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/evaluators",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/users/:username/learning-objects/:cuid/evaluation",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/evaluators",
        auth: true,
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:username/evaluations",
    },

    /**
     * Revisions routes
     */
    {
        method: HTTPMethod.POST,
        path: "/users/:username/learning-objects/:cuid/versions",
        auth: true,
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:username/learning-objects/:learningObjectId/revisions/:revisionId",
    },
    {
        method: HTTPMethod.DELETE,
        path: "/users/:username/learning-objects/:cuid/versions/:version",
        auth: true,
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
    {
        method: HTTPMethod.POST,
        path: "/users/:userId/learning-objects/:learningObjectId/submissions",
        auth: true,
    },
    {
        method: HTTPMethod.DELETE,
        path: "/users/:userId/learning-objects/:learningObjectId/submissions",
        auth: true,
    },
];
