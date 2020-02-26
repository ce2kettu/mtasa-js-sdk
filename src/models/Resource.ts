import { MtaService } from '../services';

export class Resource {
    private name: string;
    private mtaService?: MtaService;
    public static readonly SERVER_PREFIX: string = '^R^';

    constructor(name: string, mtaService?: MtaService) {
        this.name = name;
        this.mtaService = mtaService;
    }

    public static fromServer(value: string): Resource {
        const name = value.substr(3);
        return new Resource(name);
    }

    public getName(): string {
        return this.name;
    }

    public call(func: string, ...args: any[]) {
        if (!this.mtaService) {
            throw new Error(`Resource ${this.name} can not be called because Mta service is not defined`);
        }

        return this.mtaService?.callFunction(this.name, func, args);
    }

    public stringify(): string {
        return Resource.SERVER_PREFIX + this.name;
    }
}