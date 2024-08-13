import { Base } from "src/app/core/base/base.types";

export interface Conversation extends Base {
    id: string;
    title: string;
    subtitle: string;
    icon: string;
}