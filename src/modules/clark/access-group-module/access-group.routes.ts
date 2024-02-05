import { envConfig } from "../../../config/env/env.driver";
import { USER_SERVICE_URI } from "../../../config/global.env";
import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const ACCESS_GROUP_ROUTES: ProxyRoute[] = [
    {
        method: HTTPMethod.GET,
        path: "/access-groups/collections/:collectionAbvName/users",
        auth: true,
        target: envConfig.getUri(USER_SERVICE_URI),
    },
    {
        method: HTTPMethod.GET,
        path: "/access-groups/users/:id",
        auth: true,
    },
    {
        method: HTTPMethod.POST,
        path: "/access-groups/users/:username",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/access-groups/users/:username",
        auth: true,
    },
];
