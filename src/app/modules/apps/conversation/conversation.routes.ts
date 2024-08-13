import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot, Routes } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { ConversationService } from "src/app/core/services/apps/conversation/conversation.service";
import { inject } from "@angular/core";
import { getParam } from "src/app/core/utils/functions";

export const filterResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const conversationService: ConversationService = inject(ConversationService);

    return conversationService.find({
        query: getParam(route, 'filter'),
        page: getParam(route, 'page'),
        size: 20,
    });
}

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'all',
    },
    {
        path: ':filter',
        children: [
            { path: '', pathMatch: 'full', redirectTo: '1' },
            {
                path: ':page',
                resolve: [filterResolver],
                component: ListComponent,
            }
        ]
    }
];