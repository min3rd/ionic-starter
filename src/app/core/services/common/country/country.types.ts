import { Base } from "src/app/core/base/base.types";

export interface Country extends Base {
    code?: number;
    name?: string;
    shortName?: string;
    languageCode?: string;
}