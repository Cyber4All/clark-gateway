/**
 * The reasons for which a ServiceError may be thrown.
 */
export enum ServiceErrorReason {
    INTERNAL = "InternalServiceError",
}

/**
 * Defines an error that the service encountered when processing a request.
 */
export class ServiceError extends Error {
    public additionalInformation: Record<string, any>;
    constructor(
        message: string,
        type: ServiceErrorReason,
        additionalInformation?: Record<string, any>,
    ) {
        super(message);
        this.name = type;
        this.additionalInformation = additionalInformation;
    }
}

/**
 * The reasons for which a ResourceError may be thrown.
 */
export enum ResourceErrorReason {
    /**
     * Statuc code 400
     *
     * The request was not formatted correctly
     *
     * The request was missing required fields
     *
     * The request had invalid fields
     *
     * The request had invalid values
     * etc.
     */
    BAD_REQUEST = "BadRequest",

    /**
     * Status code 401
     *
     * The request has no credentials
     *
     * The request has invalid credentials
     */
    INVALID_ACCESS = "InvalidAccess",

    /**
     * Status code 403
     *
     * The request has valid credentials but does not have access to the resource
     * etc.
     */
    FORBIDDEN = "Forbidden",

    /**
     * Status code 404
     *
     * The resource was not found
     * etc.
     */
    NOT_FOUND = "NotFound",

    /**
     * Status code 409
     *
     * The resource already exists
     * etc.
     */
    CONFLICT = "Conflict",

    /**
     * Status code 429
     *
     * The user has made too many requests
     */
    TOO_MANY_REQUEST = "TooManyRequest",

    /**
     * Status code 500
     *
     * The server encountered an error
     * etc.
     */
    INTERNAL_SERVER_ERROR = "InternalServiceError",
}

/**
 * Defines an error involving a specific resource in the service.
 */
export class ResourceError extends Error {
    public additionalInformation: Record<string, any>;
    constructor(
        message: string,
        type: ResourceErrorReason,
        additionalInformation?: Record<string, any>,
    ) {
        super(message);
        this.name = type;
        this.additionalInformation = additionalInformation;
    }
}
