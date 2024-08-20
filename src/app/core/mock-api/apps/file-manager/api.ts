import { Injectable } from "@angular/core";
import { MockApi } from "../../mock-api";
import { Endpoint } from "src/app/core/constants/endpoint";
import { cloneDeep } from "lodash-es";
import { items } from "./data";

@Injectable({
    providedIn: 'root'
})
export class FileManagerMockApi extends MockApi {
    override registerHandlers(): void {
        this.mockupApiService.onGet(Endpoint.file_manager()).reply(() => {
            return [200, cloneDeep(items)];
        });
    }
}