export class AccessDeniedException extends Error {
    private static readonly EXCEPTION_MESSAGE = 'Access Denied. This server requires authentication. Please ensure that a valid username and password combination is provided.';

    constructor(message: string = AccessDeniedException.EXCEPTION_MESSAGE) {
        super(message);
        this.name = 'AccessDenied';
    }
}