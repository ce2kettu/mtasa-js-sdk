export class NotFoundStatusException extends Error {
    private static readonly EXCEPTION_MESSAGE = 'There was a problem with the request. Ensure that the resource exists and that the name is spelled correctly.';

    constructor(message: string = NotFoundStatusException.EXCEPTION_MESSAGE) {
        super(message);
        this.name = 'NotFoundStatus';
    }
}