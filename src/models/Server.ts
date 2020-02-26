import { InvalidArgumentException } from '../exceptions';
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

    public getHost(): string {
        return this.host;
    }

    public getPort(): number {
        return this.httpPort;
    }

    public getEndPoint(): string {
        return `${this.host}:${this.httpPort}`;
    }
}