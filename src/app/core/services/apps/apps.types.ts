import { Base } from "../../base/base.types";

export interface App extends Base {
    id: string;
    title: string;
    subtitle?: string;
    icon: string;
    link: string;
    children?: App[];
    authorities?: string[];
}