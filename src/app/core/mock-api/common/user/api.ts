import { Injectable } from "@angular/core";
import { MockApi } from "../../mock-api";
import { Endpoint } from "src/app/core/constants/endpoint";
import { userData } from "./data";

@Injectable({
    providedIn: 'root'
})
export class UserMockApi extends MockApi {
    override registerHandlers(): void {
        this.mockupApiService.onGet(Endpoint.common_user()).reply(() => {
            return [200, userData];
        });

        this.mockupApiService.onPut(Endpoint.common_user()).reply(({ request }) => {
            return [200, request.body];
        });

        this.mockupApiService.onPut(Endpoint.common_user_change_password()).reply(({ request }) => {
            return [200, request.body];
        });
    }
}