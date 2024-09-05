import { Base } from "src/app/core/base/base.types";

export interface Notification extends Base {
    title?: string;
    subtitle?: string;
    avatar?: string;
    thumbnail?: string;
}

export interface Film extends Base {
    title?: string;
    channel?: Channel;
    subtitle?: string;
    avatar?: string;
    thumbnail?: string;
    description?: string;
    view?: number;
    duration?: string;
    video?: string;
    like?: number;
}

export interface Channel extends Base {
    title?: string;
    avatar?: string;
    thumbnail?: string;
    description?: string;
    view?: number;
    subscription?: number;
    films?: Film[];
}