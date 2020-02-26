export class InvalidArgumentException extends Error {
    private static readonly EXCEPTION_MESSAGE = 'Invalid argument.';

    constructor(message: string = InvalidArgumentException.EXCEPTION_MESSAGE) {
        super(message);
        this.name = 'InvalidArgument';
    }
}