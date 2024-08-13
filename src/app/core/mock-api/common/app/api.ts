import { Injectable } from "@angular/core";
import { MockApi } from "../../mock-api";
import { Endpoint } from "src/app/core/constants/endpoint";
import { appsData } from "./data";

@Injectable({
    providedIn: 'root'
})
export class AppsMockApi extends MockApi {
    override registerHandlers(): void {
        this.mockupApiService.onGet(Endpoint.common_apps()).reply(() => {
            return [200, appsData];
        });
    }
}