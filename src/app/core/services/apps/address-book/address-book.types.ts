import { Base } from "src/app/core/base/base.types";

export interface AddressBook extends Base {
    firstname?: string;
    lastname?: string;
    nickname?: string;
    avatar?: string;
    emails?: string[];
    phones?: Phone[];
    address?: string;
    city?: string;
    country?: string;
}

export interface Phone extends Base {
    code?: number;
    number?: number;
}
