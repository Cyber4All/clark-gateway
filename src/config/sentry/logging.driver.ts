import * as Sentry from "@sentry/node";
import { envConfig } from "../env/env.driver";

type LogLevel = "debug" | "error" | "info" | "warn";
type LogAttributes = Record<string, boolean | number | string>;

export class Logger {
    public debug(message: string | object) {
        this.emitLog("debug", message);
    }

    public info(message: string | object) {
        this.emitLog("info", message);
    }

    public warn(message: string | object) {
        this.emitLog("warn", message);
    }

    public error(message: string | object) {
        this.emitLog("error", message);
    }

    private emitLog(level: LogLevel, message: string | object): void {
        const { body, attributes } = this.formatMessage(message);

        Sentry.logger[level](body, attributes);
    }

    private formatMessage(message: string | object): {
        attributes?: LogAttributes;
        body: string;
    } {
        if (typeof message === "string") {
            return { body: message };
        }

        return {
            attributes: this.toLogAttributes(message),
            body: JSON.stringify(message),
        };
    }

    private toLogAttributes(message: object): LogAttributes {
        return Object.entries(message).reduce<LogAttributes>(
            (attributes, [key, value]) => {
                if (
                    typeof value === "boolean" ||
                    typeof value === "number" ||
                    typeof value === "string"
                ) {
                    attributes[key] = value;
                    return attributes;
                }

                if (value !== undefined) {
                    attributes[key] = JSON.stringify(value);
                }

                return attributes;
            },
            {},
        );
    }
}

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

export function httpRequestFilter(message: any) {
    if (JSON.parse(message)["user-agent"] != "ELB-HealthChecker/2.0") {
        logger.info(message);
        if (envConfig.isDevelopment()) {
            console.log(message);
        }
    }
}

export const logger = new Logger();
