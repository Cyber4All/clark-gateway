import * as jose from "jose";
import { JwtConfig } from "./jwt.config";
import { logger } from "../logging/logging.driver";
import { Request } from "express";
import {
    ResourceError,
    ResourceErrorReason,
} from "../../shared/types/error.type";

export class JwtDriver {
    /**
     * Generate a bearer token for a user
     * @returns A signed token
     */
    static async generateBearerToken(payload: Jwt) {
        const secret = JwtConfig.getJwtSecret();

        const token = await new jose.SignJWT(payload)
            .setIssuer(JwtConfig.getIssuer())
            .setExpirationTime(payload.exp ? payload.exp : "1 day")
            .setAudience(payload.aud ? payload.aud : payload.username)
            .setProtectedHeader({ alg: "HS256" })
            .sign(new TextEncoder().encode(secret));

        return token;
    }

    /**
     * Parse a bearer token from an express request
     * @param req the express request object
     * @returns the bearer token
     */
    static parseBearerToken(req: Request): string {
        // Get token from authorization header
        const token = req.headers["authorization"];
        if (!token) {
            throw new ResourceError(
                "Authorization header not set",
                ResourceErrorReason.INVALID_ACCESS,
            );
        }

        // Remove Bearer from token
        if (!token.startsWith("Bearer ") || token.split(" ").length !== 2) {
            // Token is not formatted correctly
            throw new ResourceError(
                "Authorization header not formatted correctly",
                ResourceErrorReason.INVALID_ACCESS,
            );
        }

        // Return bearer token
        return token.split(" ")[1];
    }

    /**
     * Verify a JWT
     * @param token The JWT to be verified
     * @returns The payload of the JWT
     */
    static async verifyToken(token: string): Promise<Jwt> {
        try {
            const res: jose.JWTVerifyResult = await jose.jwtVerify(
                token,
                new TextEncoder().encode(JwtConfig.getJwtSecret()),
            );
            return res.payload as Jwt;
        } catch (error) {
            logger.error(`Error verifying token: ${error}`);
            throw new ResourceError(
                "Invalid token",
                ResourceErrorReason.INVALID_ACCESS,
            );
        }
    }
}

export class Jwt implements jose.JWTPayload {
    [propName: string]: unknown;
    iss?: string;
    sub?: string;
    aud?: string | string[];
    jti?: string;
    nbf?: number;
    exp?: number;
    iat?: number;
    /* User related fields */
    userId: string;
    username: string;
    name: string;
    email: string;
    organization: string;
    emailVerified: boolean;
    accessGroups: string[];
}
