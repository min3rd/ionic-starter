import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { inject } from "@angular/core";
import { AddressBookService } from "src/app/core/services/apps/address-book/address-book.service";
import { getParam } from "src/app/core/utils/functions";
import { CountryService } from "src/app/core/services/common/country/country.service";
import { forkJoin, of } from "rxjs";
import { EditComponent } from "./edit/edit.component";
import { DetailComponent } from "./detail/detail.component";

export const listResolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const addressBookService: AddressBookService = inject(AddressBookService);
    return addressBookService.search({
        query: getParam(route, 'filterAddressBook'),
        page: getParam(route, 'pageAddressBook'),
        size: 20,
    });
}

export const metaDataResolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const countryService: CountryService = inject(CountryService);
    return forkJoin([
        countryService.get(),
    ]);
}

export const createResolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const addressBookService: AddressBookService = inject(AddressBookService);
    addressBookService.clear();
    return of(true);
}

export const detailResolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const addressBookService: AddressBookService = inject(AddressBookService);
    return addressBookService.get(getParam(route, 'addressBookId'));
}

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'all' },
    {
        path: ':filterAddressBook',
        children: [
            { path: '', pathMatch: 'full', redirectTo: '1' },
            {
                path: ':pageAddressBook',
                component: ListComponent,
                resolve: [listResolve],
            },
            {
                path: ':pageAddressBook/new',
                component: EditComponent,
                resolve: [metaDataResolve, createResolve],
            },
            {
                path: ':pageAddressBook/:addressBookId',
                component: DetailComponent,
                resolve: [metaDataResolve, detailResolve]
            },
            {
                path: ':pageAddressBook/:addressBookId/edit',
                component: EditComponent,
                resolve: [metaDataResolve, detailResolve]
            }
        ]
    }
];