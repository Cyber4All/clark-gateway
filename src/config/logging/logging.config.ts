import { envConfig } from "../env/env.driver";
import { CORALOGIX_PRIVATE_KEY } from "../global.env";

/**
 * Config class for logging driver
 */
export class LoggingConfig {
    /**
     * Gets the coralogix private key from envs
     * @returns Return the Coralogix private key
     */
    public static getCoralogixPrivateKey(): string {
        return envConfig.getValue(CORALOGIX_PRIVATE_KEY);
    }
}