import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const NOTIFICATIONS_ROUTES: ProxyRoute[] = [
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
        path: "/learning-objects/:cuid/notifications",
        auth: true,
    },
];
