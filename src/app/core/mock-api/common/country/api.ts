import { Injectable } from "@angular/core";
import { MockApi } from "../../mock-api";
import { Endpoint } from "src/app/core/constants/endpoint";
import { countriesData } from "./data";

@Injectable({
    providedIn: 'root'
})
export class CountryMockApi extends MockApi {
    override registerHandlers(): void {
        this.mockupApiService.onGet(Endpoint.common_countries()).reply(() => {
            return [200, countriesData];
        });
    }
}