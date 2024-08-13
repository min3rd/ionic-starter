export class Endpoint {
    static api(...path: string[]): string {
        return `/api/${path.join('/')}`;
    }
    static auth(...path: string[]): string {
        return this.api('auth', ...path);
    }
    static auth_signin(): string {
        return this.auth('signin');
    }

    static auth_signup(): string {
        return this.auth('signup');
    }

    static common(...path: string[]): string {
        return this.api('common', ...path);
    }

    static common_user(): string {
        return this.common('user');
    }

    static common_user_change_password(): string {
        return this.common('user', 'change-password');
    }

    static common_apps(): string {
        return this.common('apps');
    }

    static conversation(...path: string[]): string {
        return this.api('conversations', ...path);
    }

    static conversation_id(id: string): string {
        return this.conversation(id);
    }
}