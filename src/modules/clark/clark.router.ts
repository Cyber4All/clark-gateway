import { Router } from "express";
import { FeaturedRouteHandler } from "./featured/featured.router";
import { HierarchydRouteHandler } from "./hierarchy/hierarchy.router";
import { LearningObjectsRouteHandler } from "./learning-objects/learning-objects.router";
import { LibraryRouteHandler } from "./library/library.router";
import { NotificationsRouteHandler } from "./notifications/notifications.router";
import { RatingsRouteHandler } from "./ratings/ratings.router";
import { ReportsRouteHandler } from "./reports/reports.router";
import { StandardGuidelinesRouteHandler } from "./standard-guidelines/standard-guidelines.router";
import { UsersRouteHandler } from "./users/users.router";
import { UtilityRouteHandler } from "./utility/utility.router";
import { CollectionsRouteHandler } from "./collections/collections.router";
import { MetricsRouteHandler } from "./metrics/metrics.router";
import { AccessGroupRouteHandler } from "./access-group-module/access-group.router";
import { AuthRouteHandler } from "./auth-module/auth.router";

export class ClarkRouteHandler {
    public static build(): Router {
        const router = Router();

        // Import Routers here
        router.use(AccessGroupRouteHandler.build());
        router.use(AuthRouteHandler.build());
        router.use(CollectionsRouteHandler.build());
        router.use(FeaturedRouteHandler.build());
        router.use(HierarchydRouteHandler.build());
        router.use(LearningObjectsRouteHandler.build());
        router.use(LibraryRouteHandler.build());
        router.use(MetricsRouteHandler.build());
        router.use(NotificationsRouteHandler.build());
        router.use(RatingsRouteHandler.build());
        router.use(ReportsRouteHandler.build());
        router.use(StandardGuidelinesRouteHandler.build());
        router.use(UsersRouteHandler.build());
        router.use(UtilityRouteHandler.build());

        return router;
    }
}
