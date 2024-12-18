import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const HIERARCHY_ROUTES: ProxyRoute[] = [
    /**
     * The following routes have not been declared by
     * clark-service yet and will have a different target
     * than clark-service
     *
     * The target for the following routes should be  hierarchy-service
     */
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:learningObjectId/status",
        auth: true,
    },
];
