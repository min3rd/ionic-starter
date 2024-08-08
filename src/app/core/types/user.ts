import { Base } from "../base/base.types";

export interface User extends Base {
    email: string;
    fullname: string;
    avatar?: string;
}