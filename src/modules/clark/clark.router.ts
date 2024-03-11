import { Router } from "express";
import { FeaturedRouteHandler } from "./feature-module/featured.router";
import { HierarchydRouteHandler } from "./hierarchy-module/hierarchy.router";
import { LearningObjectsRouteHandler } from "./learning-object-module/learning-objects.router";
import { LibraryRouteHandler } from "./library-module/library.router";
import { NotificationsRouteHandler } from "./notification-module/notifications.router";
import { RatingsRouteHandler } from "./rating-module/ratings.router";
import { ReportsRouteHandler } from "./report-module/reports.router";
import { StandardGuidelinesRouteHandler } from "./standard-guidelines-module/standard-guidelines.router";
import { UsersRouteHandler } from "./user-module/users.router";
import { UtilityRouteHandler } from "./utility-module/utility.router";
import { CollectionsRouteHandler } from "./collection-module/collections.router";
import { MetricsRouteHandler } from "./metric-module/metrics.router";
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
