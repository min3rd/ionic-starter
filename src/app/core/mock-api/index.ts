import { AcademyMockApi } from "./apps/academy/api";
import { AddressBookMockApi } from "./apps/address-book/api";
import { ConversationMockApi } from "./apps/conversation/api";
import { FileManagerMockApi } from "./apps/file-manager/api";
import { FilmMockAPi } from "./apps/film/api";
import { AuthMockApi } from "./auth/api";
import { AppsMockApi } from "./common/app/api";
import { CountryMockApi } from "./common/country/api";
import { UserMockApi } from "./common/user/api";

export const mockApi = [
    AuthMockApi,
    UserMockApi,
    AppsMockApi,
    ConversationMockApi,
    AddressBookMockApi,
    CountryMockApi,
    AcademyMockApi,
    FileManagerMockApi,
    FilmMockAPi,
];