import { Routes } from "@angular/router";
import { AppsComponent } from "./apps.component";

export const routes: Routes = [
    {
        path: '',
        component: AppsComponent,
    },
    {
        path: 'conversation',
        loadChildren: () => import('./conversation/conversation.routes').then((m) => m.routes),
    },
    {
        path: 'address-book',
        loadChildren: () => import('./address-book/address-book.routes').then((m) => m.routes),
    }
]