import { Base } from "src/app/core/base/base.types";

export interface Post extends Base {
    avatar?: string;
    fullname?: string;
    title?: string;
    content?: string;
    thumbnail?: string;
    images?: string[];
    views?: number;
    likes?: Like[];
    comments?: Comment[];
    shares?: Share[];
};

export interface Like extends Base {
    avatar?: string;
    fullname?: string;
    emoji?: Emoji;
    userId?: string;
};

export interface Comment extends Base {
    avatar?: string;
    fullname?: string;
    content?: string;
    thumbnail?: string;
    images?: string[];
    likes?: Like[];
    replies?: Comment[];
};

export interface Share extends Base {
    avatar?: string;
    fullname?: string;
    content?: string;
};

export interface Emoji {
    icon?: string;
    color?: string;
    label?: string;
};