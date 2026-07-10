import { HTTPMethod } from "../../shared/types/http-method.type";
import { ProxyRoute } from "../../shared/types/proxy-route.type";

export const MCP_ROUTES: ProxyRoute[] = [
    {
        method: HTTPMethod.POST,
        path: "/mcp",
    },
];
