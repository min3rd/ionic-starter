import { Injectable } from "@angular/core";
import { MockApi } from "../../mock-api";
import { MockApiUtils } from "src/app/@vn9melody/lib/mock-api";
import { Endpoint } from "src/app/core/constants/endpoint";
import { addressBooksData } from "./data";

@Injectable({
    providedIn: 'root'
})
export class AddressBookMockApi extends MockApi {
    override registerHandlers(): void {
        this.mockupApiService.onGet(Endpoint.address_book()).reply(({ request }) => {
            return [200, MockApiUtils.filterData(addressBooksData, 'name', request.params.get('query') ?? '', +(request.params.get('page') ?? 0), +(request.params.get('size') ?? 10))];
        });
    }
}