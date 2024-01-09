import { envConfig } from "../env/env.driver";
import { AWS_JWT_SECRET, ISSUER } from "../global.env";

/**
 * The JWT config
 */
export class JwtConfig {
    /**
     * Gets the Issuer of the Keys
     *
     * Production & Staging use the value passed in ENV
     * Test will use const value
     * Development will use const if ENV not set
     *
     * @returns The Issuer
     */
    public static getIssuer(): string {
        const issuer = envConfig.getValue(ISSUER, false); // won't throw error
        if ((!issuer && envConfig.isDevelopment()) || envConfig.isTest()) {
            return "issuer";
        }
        return issuer;
    }

    /**
     * Returns secret that signs/verifies user JWTs
     *
     * Production & Staging use the value passed in ENV
     * Test will use const value
     * Development will use const if ENV not set
     *
     * @returns The User Token Key
     */
    public static getJwtSecret(): string {
        const secret = envConfig.getValue(AWS_JWT_SECRET, false); // won't throw error
        if (!secret && envConfig.isDevelopment()) {
            return "secret";
        }
        if (envConfig.isTest()) {
            // value must be different for test purposes
            return "testsecret";
        }
        return secret;
    }
}
