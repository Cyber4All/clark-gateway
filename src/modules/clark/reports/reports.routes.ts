import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const REPORTS_ROUTES: ProxyRoute[] = [
    /**
     * The following routes have not been declared by
     * clark-service yet and will have a different target
     * than clark-service
     *
     * The target for the following routes shoud be clar reports lambda
     */
    // TODO: Make this route an authenticated route
    {
        method: HTTPMethod.POST,
        path: "/reports",
    },
];
