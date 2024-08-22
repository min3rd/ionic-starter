import { Base } from "src/app/core/base/base.types";

export interface Notification extends Base {
    title?: string;
    subtitle?: string;
    avatar?: string;
    thumbnail?: string;
}