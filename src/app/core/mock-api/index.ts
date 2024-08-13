import { ConversationMockApi } from "./apps/conversation/api";
import { AuthMockApi } from "./auth/api";
import { AppsMockApi } from "./common/app/api";
import { UserMockApi } from "./common/user/api";

export const mockApi = [
    AuthMockApi,
    UserMockApi,
    AppsMockApi,
    ConversationMockApi,
];