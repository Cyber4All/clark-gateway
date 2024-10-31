import { Router } from "express";
import { OrganizationRouteHandler } from "./organization/organization.router";
import { ReportRouteHandler } from "./report/report.router";
import { ResourceRouteHandler } from "./resource/resource.router";
import { SearchRouteHandler } from "./search/search.router";
import { UpdateRouteHandler } from "./update/update.router";
import { UtilityRouteHandler } from "./utility/utility.router";

export class CardRouteHandler {
    public static build(): Router {
        const router = Router();

        // Import Routers here
        router.use(OrganizationRouteHandler.build());
        router.use(ReportRouteHandler.build());
        router.use(ResourceRouteHandler.build());
        router.use(SearchRouteHandler.build());
        router.use(UpdateRouteHandler.build());
        router.use(UtilityRouteHandler.build());

        return router;
    }
}
