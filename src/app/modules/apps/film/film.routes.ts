import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from "@angular/router";
import { FilmComponent } from "./film.component";
import { FilmService } from "src/app/core/services/apps/film/film.service";
import { inject } from "@angular/core";
import { NotificationComponent } from "./notification/notification.component";
import { getParam } from "src/app/core/utils/functions";
import { ListComponent } from "./list/list.component";

export const notificationResolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const filmService: FilmService = inject(FilmService);
    return filmService.notifications();
};

export const filterResolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const filmService: FilmService = inject(FilmService);
    return filmService.search({
        query: getParam(route, 'filterFilm')
    });
};

export const routes: Routes = [
    {
        path: 'notification',
        pathMatch: 'full',
        resolve: [notificationResolve],
        component: NotificationComponent,
    },
    {
        path: '',
        component: FilmComponent,
        resolve: [notificationResolve],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'all'
            },
            {
                path: ':filterFilm',
                resolve: [filterResolve],
                component: ListComponent,
            },
        ],
    },
];