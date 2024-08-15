import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot, Routes } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { ConversationService } from "src/app/core/services/apps/conversation/conversation.service";
import { inject } from "@angular/core";
import { getParam } from "src/app/core/utils/functions";
import { ChatComponent } from "./chat/chat.component";
import { ConversationComponent } from "./conversation.component";

export const conversationResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const conversationService: ConversationService = inject(ConversationService);
    return conversationService.search({
        query: getParam(route, 'filterConversation'),
        page: getParam(route, 'pageConversation'),
        size: 20,
    });
}

export const messageResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const conversationService: ConversationService = inject(ConversationService);
    return conversationService.messages(getParam(route, 'conversationId'), {
        query: getParam(route, 'filterMessage'),
        page: getParam(route, 'pageMessage'),
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
        path: ':filterConversation',
        children: [
            { path: '', pathMatch: 'full', redirectTo: '1' },
            {
                path: ':pageConversation',
                resolve: [conversationResolver],
                component: ListComponent,
            },
            {
                path: ':pageConversation/:conversationId',
                pathMatch: 'full',
                redirectTo: ':pageConversation/:conversationId/all/1',
            },
            {
                path: ':pageConversation/:conversationId/:filterMessage/:pageMessage',
                resolve: [conversationResolver, messageResolver],
                component: ChatComponent,
            }
        ]
    }
];