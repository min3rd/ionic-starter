import { Injectable } from "@angular/core";
import { MockApi } from "../../mock-api";
import { Endpoint } from "src/app/core/constants/endpoint";
import { channelsData, filmsData, notificationsData } from "./data";
import { cloneDeep } from "lodash-es";
import { MockApiUtils } from "src/app/@vn9melody/lib/mock-api";

@Injectable({
    providedIn: 'root'
})
export class FilmMockAPi extends MockApi {
    override registerHandlers(): void {
        let temp = cloneDeep(filmsData);
        temp.forEach((film) => {
            film.channel = channelsData[Math.floor(Math.random() * channelsData.length)];
        });


        this.mockupApiService.onGet(Endpoint.films_notifications()).reply(() => {
            return [200, cloneDeep(notificationsData)];
        });

        this.mockupApiService.onGet(Endpoint.films()).reply(({ request }) => {
            return [200, MockApiUtils.filterData(
                temp,
                'title',
                request.params.get('query') ?? ''
            )];
        });
        temp.forEach((film) => {
            this.mockupApiService.onGet(Endpoint.films(film.id ?? '')).reply(() => {
                return [200, cloneDeep(film)];
            }
            );
        });
        channelsData.forEach((channel) => {
            this.mockupApiService.onGet(Endpoint.films_channels_id(channel.id ?? '')).reply(() => {
                channel.films = temp.filter((film) => Math.random() > 0.5);
                return [200, cloneDeep(channel)];
            }
            );
        });

    }
}