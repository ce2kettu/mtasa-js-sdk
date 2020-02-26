
export class FunctionNotFoundException extends Error {
    private static readonly EXCEPTION_MESSAGE = 'Attempted function call was not found';

    constructor(message: string = FunctionNotFoundException.EXCEPTION_MESSAGE) {
        super(message);
        this.name = 'FunctionNotFound';
    }
}