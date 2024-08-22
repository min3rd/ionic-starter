import { Injectable } from "@angular/core";
import { MockApi } from "../../mock-api";
import { Endpoint } from "src/app/core/constants/endpoint";
import { notificationsData } from "./data";
import { cloneDeep } from "lodash-es";

@Injectable({
    providedIn: 'root'
})
export class FilmMockAPi extends MockApi {
    override registerHandlers(): void {
        this.mockupApiService.onGet(Endpoint.film_notifications()).reply(() => {
            return [200, cloneDeep(notificationsData)];
        });
    }
}