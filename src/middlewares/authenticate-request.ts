import { Request, Response, NextFunction } from "express";
import { JwtDriver } from "../config/jwt/jwt.driver";
/**
 *
 * @param error
 * @param req
 * @param res
 * @param next
 *
 * Maps all outgoing errors to the proper status codes.
 */
export function AuthenticateRequest(
    req?: Request,
    res?: Response, // eslint-disable-line @typescript-eslint/no-unused-vars
    next?: NextFunction, // eslint-disable-line @typescript-eslint/no-unused-vars
): void {
    // Get token from authorization header
    const bearerToken = JwtDriver.parseBearerToken(req);

    // Verify token
    JwtDriver.verifyToken(bearerToken);
}
