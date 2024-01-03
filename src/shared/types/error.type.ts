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
    constructor(message: string, type: ServiceErrorReason, additionalInformation?: Record<string, any>) {
        super(message);
        this.name = type;
        this.additionalInformation = additionalInformation;
    }
}