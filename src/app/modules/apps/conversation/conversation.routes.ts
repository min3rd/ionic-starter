import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { ConversationService } from "src/app/core/services/apps/conversation/conversation.service";
import { inject } from "@angular/core";
import { getParam } from "src/app/core/utils/functions";
import { ChatComponent } from "./chat/chat.component";

const conversationResolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const conversationService: ConversationService = inject(ConversationService);
    return conversationService.search({
        query: getParam(route, 'filterConversation'),
        page: getParam(route, 'pageConversation'),
        size: 20,
    });
}

const messageResolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const conversationService: ConversationService = inject(ConversationService);
    return conversationService.messages(getParam(route, 'conversationId'), {
        query: getParam(route, 'filterMessage'),
        page: getParam(route, 'pageMessage'),
        size: 20,
    });
}

const detailResolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const conversationService: ConversationService = inject(ConversationService);
    return conversationService.get(getParam(route, 'conversationId'));
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
                resolve: [conversationResolve],
                component: ListComponent,
            },
            {
                path: ':pageConversation/:conversationId',
                pathMatch: 'full',
                redirectTo: ':pageConversation/:conversationId/all/1',
            },
            {
                path: ':pageConversation/:conversationId/:filterMessage/:pageMessage',
                resolve: [detailResolve, messageResolve],
                component: ChatComponent,
            }
        ]
    }
];