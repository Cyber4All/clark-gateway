import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const CHANGELOG_ROUTES: ProxyRoute[] = [
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:cuid/changelogs",
        auth: true,
    },
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/:cuid/changelog",
        auth: true,
    },
];
