import { Injectable } from "@angular/core";
import { MockApi } from "../../mock-api";
import { Endpoint } from "src/app/core/constants/endpoint";
import { cloneDeep } from "lodash-es";
import { conversationsData } from "./data";
import { MockApiUtils } from "src/app/@vn9melody/lib/mock-api";

@Injectable({
    providedIn: 'root'
})
export class ConversationMockApi extends MockApi {
    override registerHandlers(): void {
        this.mockupApiService.onGet(Endpoint.conversation()).reply(({ request }) => {
            return [200, MockApiUtils.filterData(conversationsData, 'title', request.params.get('query') ?? '', +(request.params.get('page') ?? 0), +(request.params.get('size') ?? 10))];
        });
    }

}