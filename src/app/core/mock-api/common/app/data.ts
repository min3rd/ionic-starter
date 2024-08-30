import { App } from "src/app/core/services/apps/apps.types";

export const appsData: App[] = [
    {
        id: 'dashboard',
        title: 'dashboard',
        subtitle: 'welcome to the dashboard',
        icon: 'bar-chart',
        link: '/apps/dashboard',
    },
    {
        id: 'conversation',
        title: 'conversation',
        subtitle: 'chat with your friends',
        icon: 'chatbubbles',
        link: '/apps/conversation',
    },
    {
        id: 'address-book',
        title: 'address book',
        subtitle: 'address book',
        icon: 'book',
        link: '/apps/address-book',
    },
    {
        id: 'academy',
        title: 'academy',
        subtitle: 'what do you want to learn today',
        icon: 'school',
        link: '/apps/academy',
    },
    {
        id: 'file-manager',
        title: 'file manager',
        subtitle: 'what do you want to learn today',
        icon: 'folder-open',
        link: '/apps/file-manager',
    },
    {
        id: 'youtube',
        title: 'youtube',
        subtitle: 'see the latest movies',
        icon: 'film',
        link: '/apps/film',
    },
]