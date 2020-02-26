import { InvalidArgumentException } from '../error';
import { validateIPAddress } from '../util';

export class Server {
    private host: string;
    private httpPort: number;

    constructor(host: string, httpPort: number) {
        if (!validateIPAddress(host)) {
            throw new InvalidArgumentException('Invalid IP');
        }

        this.host = host;
        this.httpPort = httpPort;
    }

    get getHost(): string {
        return this.host;
    }

    get getPort(): number {
        return this.httpPort;
    }

    get getEndPoint(): string {
        return `${this.host}:${this.httpPort}`;
    }
}