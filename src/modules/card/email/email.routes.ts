import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const EMAIL_ROUTES: ProxyRoute[] = [
    {
        method: HTTPMethod.POST,
        path: "/users/verify-email",
    },
    {
        method: HTTPMethod.POST,
        path: "/users/:userId/verify-email-resend",
    },
    {
        method: HTTPMethod.POST,
        path: "/users/emails/:emailType",
    },
    {
        method: HTTPMethod.POST,
        path: "/users/reset-password",
    },
    {
        method: HTTPMethod.PATCH,
        path: "/users/reset-password",
    }
];