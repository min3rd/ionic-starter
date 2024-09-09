import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from "@angular/router";
import { FeedComponent } from "./feed.component";
import { inject } from "@angular/core";
import { FeedService } from "src/app/core/services/apps/feed/feed.service";
import { ListComponent } from "./list/list.component";
import { DetailComponent } from "./detail/detail.component";
import { getParam } from "src/app/core/utils/functions";

const postsResolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const feedService: FeedService = inject(FeedService);
    return feedService.posts();
}

const postResolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const feedService: FeedService = inject(FeedService);
    return feedService.post(getParam(route, 'postId'));
}

export const routes: Routes = [
    {
        path: '',
        component: FeedComponent,
        children: [
            {
                path: '',
                resolve: [postsResolve],
                component: ListComponent,
            },
            {
                path: ':postId',
                resolve: [postResolve],
                component: DetailComponent,
            }
        ],
    }
];