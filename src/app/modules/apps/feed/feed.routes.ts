import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from "@angular/router";
import { FeedComponent } from "./feed.component";
import { inject } from "@angular/core";
import { FeedService } from "src/app/core/services/apps/feed/feed.service";

const postsResolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const feedService: FeedService = inject(FeedService);
    return feedService.posts();
}

export const routes: Routes = [
    {
        path: '',
        resolve: [postsResolve],
        component: FeedComponent,
    }
];