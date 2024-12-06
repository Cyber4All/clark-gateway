import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

/**
 * only one route present here in which would actually be found in the CARD user route handler, 
 * but we are no longer using CARD user routes apart from this which is for CARD link checking to send emails,
 * so for better naming convention this is kept as EMAIL_ROUTES. Part of CLARD Unified Users Epic.
 */
export const EMAIL_ROUTES: ProxyRoute[] = [
    {
        method: HTTPMethod.POST,
        path: "/users/emails/:emailType",
    },
];