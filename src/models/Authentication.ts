export class Authentication {
    private user: string;
    private password: string;

    constructor(user: string, password: string) {
        this.user = user;
        this.password = password;
    }

    get getUser(): string {
        return this.user;
    }

    get getPassword(): string {
        return this.password;
    }
}