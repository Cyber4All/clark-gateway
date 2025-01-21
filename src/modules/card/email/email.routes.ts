import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

/**
 * Note: The emailType route can be found in the `cards-service` user route handler. With the delegation of user
 * administration to CLARK it was most appropriate to update the naming convention to EMAIL_ROUTES.
 * This change was introduced as part of the `CLARD Unified Users Epic`.
 */
export const EMAIL_ROUTES: ProxyRoute[] = [
    {
        method: HTTPMethod.POST,
        path: "/users/emails/:emailType",
    },
];
