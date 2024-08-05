import { inject, Injectable } from "@angular/core";
import { MockApiService } from "src/app/@vn9melody/lib/mock-api";

@Injectable({
    providedIn: 'root'
})
export class MockApi {
    mockupApiService = inject(MockApiService);
    constructor() {
        this.registerHandlers();
    }
    registerHandlers() {
        throw new Error('You have to implement the method registerHandlers!');
    }
}