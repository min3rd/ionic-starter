export class Endpoint {
    static api(...path: string[] | any[]): string {
        return `/api/${path.join('/')}`;
    }
    static auth(...path: string[] | any[]): string {
        return this.api('auth', path.join('/'));
    }
    static auth_signin(): string {
        return this.auth('signin');
    }

    static auth_signup(): string {
        return this.auth('signup');
    }

    static common(...path: string[] | any[]): string {
        return this.api('common', path.join('/'));
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
        return this.api('conversations', path.join('/'));
    }

    static conversation_id(id: string, ...path: string[] | any[]): string {
        return this.conversation(id, path.join('/'));
    }

    static conversation_id_messages(conversationId: string | undefined, ...path: string[] | any[]): string {
        return this.conversation(conversationId, 'messages', path.join('/'));
    }

    static address_book(...path: string[] | any[]): string {
        return this.api('address-books', path.join('/'));
    }

    static address_book_id(id: string | undefined, ...path: string[] | any[]): string {
        return this.address_book(id, path.join('/'));
    }

    static academy(...path: string[] | any[]): string {
        return this.api('academy', path.join('/'));
    }

    static academy_categories(...path: string[] | any[]): string {
        return this.academy('categories', path.join('/'));
    }

    static academy_courses(...path: string[] | any[]): string {
        return this.academy('courses', path.join('/'));
    }

    static academy_courses_id(id: string | undefined, ...path: string[] | undefined[]): string {
        return this.academy_courses(id, path.join('/'));
    }
    static academy_courses_id_steps(id: string | undefined, ...path: string[] | undefined[]): string {
        return this.academy_courses_id(id, 'steps', path.join('/'));
    }
}