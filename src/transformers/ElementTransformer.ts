import { ElementFactory } from '../factories';

export class ElementTransformer {

    public static fromServer(dataFromServer?: string): any {
        if (!dataFromServer) {
            return null;
        }

        const data = JSON.parse(dataFromServer);
        return this.stringValuesToObjects(data);
    }

    public static toServer(inputData: any[]): string {
        return JSON.stringify(inputData);
    }

    public static stringValuesToObjects(value: any): any {
        if (Array.isArray(value)) {
            value = value.map(v => this.stringValuesToObjects(v));
        } else if (typeof value === 'string') {
            value = ElementFactory.fromServer(value);
        }

        return value;
    }
}