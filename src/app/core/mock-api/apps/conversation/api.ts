import { Injectable } from "@angular/core";
import { MockApi } from "../../mock-api";
import { Endpoint } from "src/app/core/constants/endpoint";
import { cloneDeep } from "lodash-es";
import { conversationsData, messagesData } from "./data";
import { MockApiUtils } from "src/app/@vn9melody/lib/mock-api";
import { userData } from "../../common/user/data";

@Injectable({
    providedIn: 'root'
})
export class ConversationMockApi extends MockApi {
    override registerHandlers(): void {
        this.mockupApiService.onGet(Endpoint.conversation()).reply(({ request }) => {
            return [200, MockApiUtils.filterData(conversationsData, 'title', request.params.get('query') ?? '', +(request.params.get('page') ?? 0), +(request.params.get('size') ?? 10))];
        });
        conversationsData.forEach(conversation => {
            this.mockupApiService.onGet(Endpoint.conversation_id_messages(conversation.id)).reply(({ request }) => {
                const messages = cloneDeep(messagesData).map(e => {
                    e.conversationId = conversation.id;
                    if (Math.random() > 0.5) {
                        e.sender = userData.fullname;
                        e.avatar = userData.avatar;
                    }
                    return e;
                });
                return [200,
                    MockApiUtils.filterData(
                        messages,
                        'content',
                        request.params.get('query') ?? '',
                        +(request.params.get('page') ?? 0),
                        +(request.params.get('size') ?? 10)
                    )];
            });
        });
    }

}