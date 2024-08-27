import { Injectable } from "@angular/core";
import { MockApi } from "../../mock-api";
import { Endpoint } from "src/app/core/constants/endpoint";
import { filmsData, notificationsData } from "./data";
import { cloneDeep } from "lodash-es";
import { MockApiUtils } from "src/app/@vn9melody/lib/mock-api";

@Injectable({
    providedIn: 'root'
})
export class FilmMockAPi extends MockApi {
    override registerHandlers(): void {
        this.mockupApiService.onGet(Endpoint.film_notifications()).reply(() => {
            return [200, cloneDeep(notificationsData)];
        });

        this.mockupApiService.onGet(Endpoint.film()).reply(({ request }) => {
            return [200, MockApiUtils.filterData(
                filmsData,
                'title',
                request.params.get('query') ?? ''
            )];
        });
    }
}