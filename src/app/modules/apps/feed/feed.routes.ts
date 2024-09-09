import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from "@angular/router";
import { FeedComponent } from "./feed.component";
import { inject } from "@angular/core";
import { FeedService } from "src/app/core/services/apps/feed/feed.service";
import { ListComponent } from "./list/list.component";

const postsResolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const feedService: FeedService = inject(FeedService);
    return feedService.posts();
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
            }
        ],
    }
];