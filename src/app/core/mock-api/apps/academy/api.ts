import { Injectable } from "@angular/core";
import { MockApi } from "../../mock-api";
import { Endpoint } from "src/app/core/constants/endpoint";
import { cloneDeep } from "lodash-es";
import { courseCategoriesData, coursesData } from "./data";
import { MockApiUtils } from "src/app/@vn9melody/lib/mock-api";

@Injectable({
    providedIn: 'root'
})
export class AcademyMockApi extends MockApi {
    override registerHandlers(): void {
        this.mockupApiService.onGet(Endpoint.academy_categories()).reply(() => {
            return [200, cloneDeep(courseCategoriesData)];
        });
        this.mockupApiService.onGet(Endpoint.academy_courses()).reply(({ request }) => {

            return [200, MockApiUtils.filterData(
                coursesData,
                'category',
                request.params.get('query') ?? '',
                +(request.params.get('page') ?? 1),
                +(request.params.get('size') ?? 10)
            )];
        });
    }
}