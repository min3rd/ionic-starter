import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from "@angular/router";
import { FilmComponent } from "./film.component";
import { FilmService } from "src/app/core/services/apps/film/film.service";
import { inject } from "@angular/core";
import { NotificationComponent } from "./notification/notification.component";

export const notificationResolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const filmService: FilmService = inject(FilmService);
    return filmService.notifications();
};

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'trending' },
    {
        path: ':filterFilm',
        resolve: [notificationResolve],
        component: FilmComponent,
        children: [
            {
                path: 'notification',
                component: NotificationComponent,
            }
        ],
    },
];