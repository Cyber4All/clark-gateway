import { Request, Response, NextFunction } from "express";
import {
    ResourceErrorReason,
    ServiceErrorReason,
} from "../shared/types/error.type";
import { logger } from "../config/logging/logging.driver";

/**
 *
 * @param error
 * @param req
 * @param res
 * @param next
 *
 * Maps all outgoing errors to the proper status codes.
 */
export function ErrorParser(
    error: any,
    req?: Request,
    res?: Response,
    next?: NextFunction, // eslint-disable-line @typescript-eslint/no-unused-vars
): void {
    const status = {
        code: 500,
        message: error.message,
    };
    switch (error.name) {
        case ResourceErrorReason.BAD_REQUEST:
            status.code = 400;
            logger.warn(JSON.stringify({ status: status.code, ...error }));
            break;
        case ResourceErrorReason.INVALID_ACCESS:
            status.code = 401;
            logger.warn(JSON.stringify({ status: status.code, ...error }));
            break;
        case ResourceErrorReason.FORBIDDEN:
            status.code = 403;
            logger.warn(JSON.stringify({ status: status.code, ...error }));
            break;
        case ResourceErrorReason.NOT_FOUND:
            status.code = 404;
            logger.warn(JSON.stringify({ status: status.code, ...error }));
            break;
        case ResourceErrorReason.CONFLICT:
            status.code = 409;
            logger.warn(JSON.stringify({ status: status.code, ...error }));
            break;
        case ResourceErrorReason.TOO_MANY_REQUEST:
            status.code = 429;
            logger.warn(JSON.stringify({ status: status.code, ...error }));
            break;
        case ServiceErrorReason.INTERNAL:
            status.code = 500;
            status.message = "Internal service error";
            logger.error(
                JSON.stringify({
                    message: error.message,
                    stack: error.stack,
                    name: error.name,
                }),
            );
            break;
        default:
            status.code = 500;
            status.message = "Internal service error";
            logger.error(
                JSON.stringify({
                    message: error.message,
                    stack: error.stack,
                    name: error.name,
                }),
            );
            break;
    }

    res.status(status.code).json(status);
}
