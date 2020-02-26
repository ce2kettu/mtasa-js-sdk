import { Resource as MtaResource } from './Resource';

export class Resources {
    private resources: MtaResource[] = [];

    public findByName(name: string): MtaResource | undefined {
        const found = this.resources.find((resource) => {
            return resource.getName() === name;
        });

        return found;
    } 

    public add(resource: MtaResource) {
        this.resources.push(resource);
    }

    public all(): MtaResource[] {
        return this.resources;
    }
}