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

    static conversations(...path: string[] | any[]): string {
        return this.api('conversations', path.join('/'));
    }

    static conversations_id(id: string | undefined, ...path: string[] | any[]): string {
        return this.conversations(id, path.join('/'));
    }

    static conversations_id_messages(conversationId: string | undefined, ...path: string[] | any[]): string {
        return this.conversations(conversationId, 'messages', path.join('/'));
    }

    static address_books(...path: string[] | any[]): string {
        return this.api('address-books', path.join('/'));
    }

    static address_books_id(id: string | undefined, ...path: string[] | any[]): string {
        return this.address_books(id, path.join('/'));
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

    static file_manager(...path: string[] | any[]): string {
        return this.api('file-manager', path.join('/'));
    }

    static films(...path: string[] | undefined[]): string {
        return this.api('films', path.join('/'));
    }

    static films_notifications(...path: string[] | undefined[]): string {
        return this.films('notifications', path.join('/'));
    }

    static films_channels(...path: string[] | undefined[]): string {
        return this.films('channels', path.join('/'));
    }

    static films_channels_id(id: string, ...path: string[] | undefined[]): string {
        return this.films_channels(id, path.join('/'));
    }

    static feeds(...path: string[] | undefined[]): string {
        return this.api('feeds', path.join('/'));
    }

    static feed_posts(...path: string[] | undefined[]): string {
        return this.feeds('posts', path.join('/'));
    }

    static feed_posts_id(id: string | any, ...path: string[] | undefined[]): string {
        return this.feed_posts(id, path.join('/'));
    }
}