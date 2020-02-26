import { Element, Resource } from '../models';

export class ElementFactory {
    public static fromServer(value: string) {
        const valuePrefix = value.substring(0, 3);

        switch (valuePrefix) {
            case Element.SERVER_PREFIX:
                return Element.fromServer(value);
            case Resource.SERVER_PREFIX:
                return Resource.fromServer(value);
        }

        return value;
    }
}