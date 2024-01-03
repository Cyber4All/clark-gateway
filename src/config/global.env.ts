// ========================================================
//                      Required ENVS
// ========================================================
/**
 * Environment in which the service is running
 * Options: development, production, staging, test
 */
export const NODE_ENV = "NODE_ENV";

// ========================================================
//                        Optional ENVS
// ========================================================
/**
 * Port on which the service will run
 * Default: 3000
 */
export const PORT = "PORT";

/**
 * Secret used to sign JWTs
 * Default: "secret" in development & "test" in test
 * Required for production & staging
 */
export const AWS_JWT_SECRET = "AWS_JWT_SECRET";

/**
 * Issuer of the JWT
 * Default: "issuer" in development & test
 * Required for production & staging
 */
export const ISSUER = "ISSUER";

/**
 * Coralogix Private Key
 * Required for production & staging
 */
export const CORALOGIX_PRIVATE_KEY = "CORALOGIX_PRIVATE_KEY";
