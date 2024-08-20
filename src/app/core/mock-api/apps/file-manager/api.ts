import { Injectable } from "@angular/core";
import { MockApi } from "../../mock-api";
import { Endpoint } from "src/app/core/constants/endpoint";
import { cloneDeep } from "lodash-es";
import { items } from "./data";
import { MockApiUtils } from "src/app/@vn9melody/lib/mock-api";

@Injectable({
    providedIn: 'root'
})
export class FileManagerMockApi extends MockApi {
    override registerHandlers(): void {
        this.mockupApiService.onGet(Endpoint.file_manager()).reply(({ request }) => {
            return [200,
                MockApiUtils.filterData(
                    items,
                    'folderId',
                    request.params.get('query') ?? 'null',
                ),
            ];
        });
    }
}