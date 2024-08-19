import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { envConfig } from "../../../config/env/env.driver";
import { CLARK_SERVICE_URI } from "../../../config/global.env";
// Import all routes from modular route files
import { BUNDLING_ROUTES } from "./bundling.routes";
import { CHANGE_AUTHORSHIP_ROUTES } from "./change-authorship.routes";
import { CHANGELOG_ROUTES } from "./changelog.routes";
import { HIERARCHY_ROUTES } from "./hierarchy.routes";
import { LEARNING_OBJECTS_ROUTES } from "./learning-objects.routes";
import { OUTCOMES_ROUTES } from "./outcomes.routes";
import { RELEVANCY_ROUTES } from "./relevancy.routes";
import { SEARCH_ROUTES } from "./search.routes";
import { SUBMISSIONS_ROUTES } from "./submissions.routes";
import { TOPICS_ROUTES } from "./topics.routes";
import { LEGACY_ROUTES } from "./legacy.routes";
import { REVISIONS_ROUTES } from "./revisions.routes";

export class LearningObjectsRouteHandler {
    public static build(): Router {
        return buildProxyRouter(
            [
                ...BUNDLING_ROUTES,
                ...CHANGE_AUTHORSHIP_ROUTES,
                ...CHANGELOG_ROUTES,
                ...HIERARCHY_ROUTES,
                ...LEARNING_OBJECTS_ROUTES,
                ...OUTCOMES_ROUTES,
                ...RELEVANCY_ROUTES,
                ...REVISIONS_ROUTES,
                ...SEARCH_ROUTES,
                ...SUBMISSIONS_ROUTES,
                ...TOPICS_ROUTES,
                ...LEGACY_ROUTES,
            ],
            envConfig.getUri(CLARK_SERVICE_URI),
        );
    }
}
