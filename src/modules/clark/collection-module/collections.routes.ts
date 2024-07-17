import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const COLLECTION_ROUTES: ProxyRoute[] = [
    // TODO: Move to LO module
    {
        method: HTTPMethod.GET,
        path: "/users/:username/collections",
    },
    // ------------------------
    {
        method: HTTPMethod.GET,
        path: "/collections",
    },
    {
        method: HTTPMethod.GET,
        path: "/collections/:abvName",
    },
];
