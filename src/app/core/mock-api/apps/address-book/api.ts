import { Injectable } from "@angular/core";
import { MockApi } from "../../mock-api";
import { MockApiUtils } from "src/app/@vn9melody/lib/mock-api";
import { Endpoint } from "src/app/core/constants/endpoint";
import { addressBooksData } from "./data";
import { cloneDeep } from "lodash-es";

@Injectable({
    providedIn: 'root'
})
export class AddressBookMockApi extends MockApi {
    override registerHandlers(): void {
        this.mockupApiService.onGet(Endpoint.address_book()).reply(({ request }) => {
            return [200, MockApiUtils.filterData(addressBooksData, 'name', request.params.get('query') ?? '', +(request.params.get('page') ?? 0), +(request.params.get('size') ?? 10))];
        });

        this.mockupApiService.onPost(Endpoint.address_book()).reply(({ request }) => {
            let data = cloneDeep(request.body);
            data.id = MockApiUtils.guid();
            this.mockupApiService.onGet(Endpoint.address_book_id(data.id)).reply(() => {
                return [200, data];
            });
            return [200, data];
        });

        for (let addressBook of addressBooksData) {
            this.mockupApiService.onGet(Endpoint.address_book_id(addressBook.id)).reply(() => {
                let data = cloneDeep(addressBook);
                return [200, data];
            });
            this.mockupApiService.onPut(Endpoint.address_book_id(addressBook.id)).reply(({ request }) => {
                let data = cloneDeep(request.body);
                this.mockupApiService.onGet(Endpoint.address_book_id(data.id)).reply(() => {
                    return [200, data];
                });
                return [200, data];
            });
        }
    }
}