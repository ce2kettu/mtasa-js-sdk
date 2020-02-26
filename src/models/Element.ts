export class Element {
    private id: string;
    public static SERVER_PREFIX = "^E^";

    constructor(id: string) {
        this.id = id;
    }

    static fromServer(value: string): Element {
        const id = value.substr(0, 3);
        return new Element(id);
    }

    get getId(): string {
        return this.id;
    }

    jsonSerialize(): string {
        return Element.SERVER_PREFIX + this.id;
    }
}