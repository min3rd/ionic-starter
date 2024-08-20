import { App } from "src/app/core/services/apps/apps.types";

export const appsData: App[] = [
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
]