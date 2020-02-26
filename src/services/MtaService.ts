import { Server, Authentication } from "../models";

export class MtaService {
    private server: Server;
    private auth: Authentication;
    private static HTTP_METHOD = "post";

    constructor(server: Server, auth: Authentication) {
        
    }
}