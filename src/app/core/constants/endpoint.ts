export class Endpoint {
    static api(...path: string[]): string {
        return `/api/${path.join('/')}`;
    }
    static auth(...path: string[]): string {
        return this.api('auth', ...path);
    }
    static auth_signin() {
        return this.auth('signin');
    }

    static auth_signup() {
        return this.auth('signup');
    }
}