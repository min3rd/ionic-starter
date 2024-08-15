import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { inject } from "@angular/core";
import { AddressBookService } from "src/app/core/services/apps/address-book/address-book.service";
import { getParam } from "src/app/core/utils/functions";
import { DetailComponent } from "./detail/detail.component";

export const listResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const addressBookService: AddressBookService = inject(AddressBookService);
    return addressBookService.search({
        query: getParam(route, 'filterAddressBook'),
        page: getParam(route, 'pageAddressBook'),
        size: 20,
    });
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
                resolve: [listResolver],
            },
            {
                path: ':pageAddressBook/new',
                component: DetailComponent,
            }
        ]
    }
];