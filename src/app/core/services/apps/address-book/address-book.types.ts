import { Base } from "src/app/core/base/base.types";
import { Country } from "../../common/country/country.types";

export interface AddressBook extends Base {
    firstname?: string;
    lastname?: string;
    nickname?: string;
    avatar?: string;
    emails?: string[];
    phones?: Phone[];
    address?: string;
    city?: string;
    country?: Country;
}

export interface Phone extends Base {
    code?: number;
    number?: number;
}
