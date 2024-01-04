import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const NOTIFICATIONS_ROUTES: ProxyRoute[] = [
    /**
     * The following routes have not been declared by
     * clark-service yet and will have a different target
     * than clark-service
     *
     * The target for the following routes shoud be notifications-service
     */
    {
        method: HTTPMethod.GET,
        path: "/users/:username/notifications",
        auth: true,
    },
    {
        method: HTTPMethod.DELETE,
        path: "/users/:username/notifications/:id",
        auth: true,
    },
    {
        method: HTTPMethod.POST,
        path: "/users/:username/learning-objects/:cuid/notifications",
        auth: true,
    },
];
