import { Base } from "src/app/core/base/base.types";

export interface Conversation extends Base {
    title?: string;
    subtitle?: string;
    icon?: string;
}

export interface Message extends Base {
    conversationId?: string;
    sender?: string;
    avatar?: string;
    content?: string;
}