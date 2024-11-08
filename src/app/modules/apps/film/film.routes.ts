import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from "@angular/router";
import { FilmComponent } from "./film.component";
import { FilmService } from "src/app/core/services/apps/film/film.service";
import { inject } from "@angular/core";
import { NotificationComponent } from "./notification/notification.component";
import { getParam } from "src/app/core/utils/functions";
import { ListComponent } from "./list/list.component";
import { DetailComponent } from "./detail/detail.component";
import { ChannelComponent } from "./channel/channel.component";

const notificationResolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const filmService: FilmService = inject(FilmService);
    return filmService.notifications();
};

const filterResolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const filmService: FilmService = inject(FilmService);
    return filmService.search();
};

const detailResolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const filmService: FilmService = inject(FilmService);
    return filmService.get(getParam(route, 'filmId'));
}

const channelResolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const filmService: FilmService = inject(FilmService);
    return filmService.channel(getParam(route, 'channelId'));
}

export const routes: Routes = [
    {
        path: 'notification',
        pathMatch: 'full',
        resolve: [notificationResolve],
        component: NotificationComponent,
    },
    {
        path: 'channels/:channelId',
        resolve: [channelResolve],
        component: ChannelComponent,
    },
    {
        path: '',
        component: FilmComponent,
        resolve: [notificationResolve],
        children: [
            {
                path: '',
                resolve: [filterResolve],
                component: ListComponent,
            },
            {
                path: ':filmId',
                resolve: [detailResolve, filterResolve],
                component: DetailComponent,
            }
        ],
    },
];