import { Injectable } from "@angular/core";
import { MockApi } from "../../mock-api";

@Injectable({
    providedIn: 'root'
})
export class FeedMockApi extends MockApi {
    override registerHandlers(): void {

    }
}