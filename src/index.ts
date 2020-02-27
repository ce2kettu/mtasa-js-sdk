import { Authentication, Resource as MtaResource, Resources, Server } from './models';
import { MtaService } from './services';
import { ElementTransformer } from './transformers';


export class Mta {
    private mtaService: MtaService;
    private resources: Resources;

    constructor(server: Server, auth: Authentication) {
        this.mtaService = new MtaService(server, auth);
        this.resources = new Resources();
    }

    get getService(): MtaService {
        return this.mtaService;
    }

    public getResource(resourceName: string): MtaResource {
        let resource = this.resources.findByName(resourceName);

        if (!resource) {
            resource = new MtaResource(resourceName, this.mtaService);
            this.resources.add(resource);
        }

        return resource;
    }

    public getInput() {
        
    }

    public doReturn(...args: any[]) {
        return ElementTransformer.toServer(args);
    }

}

// const server = new Server('127.0.0.1', 22005);
// const auth = new Authentication('myUser', 'myPassword');
// const mta = new Mta(server, auth);
//
// const response = mta.getResource('someResource').call('callableFunction', arg1, arg2, arg3, ...);