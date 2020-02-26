export class Element {
    private id: string;
    public static readonly SERVER_PREFIX: string = '^E^';

    constructor(id: string) {
        this.id = id;
    }

    public static fromServer(value: string): Element {
        const id = value.substr(3);
        return new Element(id);
    }

    public getId(): string {
        return this.id;
    }

    public stringify(): string {
        return Element.SERVER_PREFIX + this.id;
    }
}