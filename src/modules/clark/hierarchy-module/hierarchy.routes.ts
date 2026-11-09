import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const HIERARCHY_ROUTES: ProxyRoute[] = [
    // Hierarchy status orchestration now lives in clark-service.
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:learningObjectId/status",
        auth: true,
    },
];
