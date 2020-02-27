import fetch from 'node-fetch';
import { Server, Authentication } from '../models';
import { ElementTransformer } from '../transformers';
import { basicAuthorization } from '../utils';

export class MtaService {
    private server: Server;
    private auth: Authentication;
    private static readonly HTTP_METHOD = 'post';

    constructor(server: Server, auth: Authentication) {
        this.server = server;
        this.auth = auth;
    }

    public callFunction(resourceName: string, functionName: string, args: any[] = []) {
        const requestData = ElementTransformer.toServer(args);
        const endPoint = this.getEndpointToResourceFunction(resourceName, functionName);
        fetch(endPoint, {
            method: MtaService.HTTP_METHOD,
            body: requestData,
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': args.length.toString(),
                'Authorization': `Basic ${basicAuthorization(this.auth.getUser(), this.auth.getPassword())}`
            }
        })
        .then(res => res.text())
        .then(txt => {
            console.log('text: ' + txt);
            const a = ElementTransformer.fromServer(txt);
            console.log(a);
        });
    }

    public getEndpointToResourceFunction(resourceName: string, functionName: string): string {
        return `http://${this.server.getEndPoint()}/${resourceName}/call/${functionName}`;
    }
}