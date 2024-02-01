import { envConfig } from "../../../config/env/env.driver";
import { USER_SERVICE_URI } from "../../../config/global.env";
import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const COLLECTION_ROUTES: ProxyRoute[] = [
    // TODO: This route is not yet implemented in clark-service
    // once it has been implemented the target should be removed
    {
        method: HTTPMethod.GET,
        path: "/users/:username/collections",
        auth: true,
        target: envConfig.getUri(USER_SERVICE_URI),
    },
];
