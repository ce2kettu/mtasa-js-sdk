export class Resource {
    private name: string;
    public static SERVER_PREFIX = "^R^";

    constructor() {

    }

    get getName(): string {
        return this.name;
    }

    call(func: string, ...args: any[]) {
        
    }

    jsonSerialize(): string {
        return Resource.SERVER_PREFIX + this.name;
    }
}