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
    },
    {
        path: 'academy',
        loadChildren: () => import('./academy/academy.routes').then((m) => m.routes),
    },
    {
        path: 'file-manager',
        loadChildren: () => import('./file-manager/file-manager.routes').then((m) => m.routes),
    },
    {
        path: 'film',
        loadChildren: () => import('./film/film.routes').then((m) => m.routes),
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.routes').then((m) => m.routes),
    },
    {
        path: 'feed',
        loadChildren: () => import('./feed/feed.routes').then((m) => m.routes),
    },
]