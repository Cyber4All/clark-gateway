import winston from "winston";
import os from "os";
import { envConfig } from "../env/env.driver";
import { LoggingConfig } from "./logging.config";

export class Logger {
    public logger: winston.Logger;
    public constructor() {
        /**
         * Create the logger with default values
         */
        this.logger = winston.createLogger({
            levels: {
                debug: 6,
                verbose: 5,
                info: 4,
                warn: 3,
                error: 2,
                critical: 1,
            },
            /* Display errors with stack traces */
            format: winston.format.combine(
                winston.format.errors({ stack: true }),
                winston.format.timestamp(),
                winston.format.json(),
            ),
            exitOnError: false,
            level: envConfig.isProduction() ? "info" : "debug",
        });

        if (envConfig.isProduction() || envConfig.isStaging()) {
            const identifier = envConfig.isProduction()
                ? "production"
                : "staging";
            this.logger.add(
                new winston.transports.Http({
                    level: envConfig.isProduction() ? "info" : "debug", // only sends logs of `level` or higher priority
                    format: winston.format.combine(
                        winston.format((info) => ({
                            applicationName: `clark-${identifier}`,
                            subsystemName: "clark-gateway",
                            computerName: os.hostname(),
                            timestamp: Date.now(),
                            severity:
                                {
                                    debug: 1,
                                    verbose: 2,
                                    info: 3,
                                    warn: 4,
                                    error: 5,
                                    critical: 6,
                                }[info.level] || 3,
                            text: info.message,
                            level: info.level,
                            message: info.message,
                        }))(),
                        winston.format.errors({ stack: true }),
                        winston.format.timestamp(),
                        winston.format.json(),
                    ),
                    host: "api.coralogix.us",
                    path: "/logs/rest/singles",
                    headers: {
                        private_key: LoggingConfig.getCoralogixPrivateKey(),
                    },
                    ssl: true,
                    batchInterval: 1,
                    handleExceptions: true,
                }),
            );
        } else {
            this.logger.add(new winston.transports.Console());
        }
    }
}

/**
 * Format Morgan request object for logging to winston
 */
export function formatMorganJson(tokens: any, req: any, res: any) {
    return JSON.stringify({
        "remote-address": tokens["remote-addr"](req, res),
        date: tokens["date"](req, res, "clf"),
        method: tokens["method"](req, res),
        url: tokens["url"](req, res),
        "http-version": tokens["http-version"](req, res),
        status: tokens["status"](req, res),
        "content-length": tokens["res"](req, res, "content-length"),
        referrer: tokens["referrer"](req, res),
        "user-agent": tokens["user-agent"](req, res),
    });
}

/**
 * Function used to pipe HTTP requests from Morgan to Winston Logger
 * The function filters out any ELB health check logs
 */
export function httpRequestFilter(message: any) {
    if (JSON.parse(message)["user-agent"] != "ELB-HealthChecker/2.0") {
        logger.info(message);
    }
}

export const logger = new Logger().logger;
