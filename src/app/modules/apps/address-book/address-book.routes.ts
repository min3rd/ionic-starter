import { Routes } from "@angular/router";
import { ListComponent } from "./list/list.component";

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'all' },
    {
        path: ':filterAddressBook',
        children: [
            { path: '', pathMatch: 'full', redirectTo: '1' },
            {
                path: ':pageAddressBook',
                component: ListComponent,
            }
        ]
    }
];