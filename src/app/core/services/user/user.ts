import { Base } from "../../base/base.types";

export interface User extends Base {
    email: string;
    fullname: string;
    phone?: string;
    address?: string;
    city?: string;
    country?: string;
    avatar?: string;
}