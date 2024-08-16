export class Endpoint {
    static api(...path: string[] | any[]): string {
        return `/api/${path.join('/')}`;
    }
    static auth(...path: string[] | any[]): string {
        return this.api('auth', path);
    }
    static auth_signin(): string {
        return this.auth('signin');
    }

    static auth_signup(): string {
        return this.auth('signup');
    }

    static common(...path: string[] | any[]): string {
        return this.api('common', path);
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

    static common_countries(): string {
        return this.common('countries');
    }

    static conversation(...path: string[] | any[]): string {
        return this.api('conversations', path);
    }

    static conversation_id(id: string, ...path: string[] | any[]): string {
        return this.conversation(id, path);
    }

    static conversation_id_messages(conversationId: string | undefined, ...path: string[] | any[]): string {
        return this.conversation(conversationId, 'messages', path);
    }

    static address_book(...path: string[] | any[]): string {
        return this.api('address-books', path);
    }

    static address_book_id(id: string | undefined, ...path: string[] | any[]): string {
        return this.address_book(id, path);
    }
}