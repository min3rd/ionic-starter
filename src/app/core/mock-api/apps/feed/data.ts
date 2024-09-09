import { Comment, Emoji, Like, Post, Share } from "src/app/core/services/apps/feed/feed.types";

export const emojisData: Emoji[] = [
    {
        icon: 'thumbs-up',
        color: 'primary',
        label: 'like',
    },
    {
        icon: 'heart',
        color: 'error',
        label: 'love',
    },
    {
        icon: 'happy',
        color: 'info',
        label: 'happy',
    },
    {
        icon:'sad',
        color: 'accent',
        label: 'sad',
    }
];

export const likesData: Like[] = [
    {
        id: '95acc492-9721-4c63-bf23-5006c84e78cc',
        avatar: 'assets/images/avatars/1.jpg',
        fullname: 'Cristian Torres',
    },
    {
        id: '4d2e1d12-1297-4237-ae2a-b65d26932be4',
        avatar: 'assets/images/avatars/2.jpg',
        fullname: 'Alice Cuthbert',
    },
    {
        id: '86477f8d-c57c-46b9-9fc1-981b744ab9e7',
        avatar: 'assets/images/avatars/3.jpg',
        fullname: 'Jhon Doe',
    },
    {
        id: 'c309066d-3641-4a3c-86f8-2691e1d0afd5',
        avatar: 'assets/images/avatars/4.jpg',
        fullname: 'Cristian Torres',
    },
    {
        id: 'fb15fdb4-f2d7-4489-a6af-a337c981c280',
        avatar: 'assets/images/avatars/5.jpg',
        fullname: 'Alice Cuthbert',
    },
    {
        id: '0039f341-4a8c-4de4-9121-bb5c6dbc2059',
        avatar: 'assets/images/avatars/6.jpg',
        fullname: 'Jhon Doe',
    },
    {
        id: 'b546561c-172d-46ff-a889-2f3cd23691b0',
        avatar: 'assets/images/avatars/7.jpg',
        fullname: 'Cristian Torres',
    },
    {
        id: '6f74615e-218a-41f1-9018-cf04cdc9aa80',
        avatar: 'assets/images/avatars/8.jpg',
        fullname: 'Alice Cuthbert',
    },
    {
        id: 'ae3f6b13-33bc-4831-86d2-6827f77edcca',
        avatar: 'assets/images/avatars/9.jpg',
        fullname: 'Jhon Doe',
    }
];

export const commentsData: Comment[] = [
    {
        id: '95acc492-9721-4c63-bf23-5006c84e78cc',
        avatar: 'assets/images/avatars/1.jpg',
        fullname: 'Cristian Torres',
        content: 'Wow, this is amazing!',
    },
    {
        id: '4d2e1d12-1297-4237-ae2a-b65d26932be4',
        avatar: 'assets/images/avatars/2.jpg',
        fullname: 'Alice Cuthbert',
        content: 'I agree with you!',
    },
    {
        id: '86477f8d-c57c-46b9-9fc1-981b744ab9e7',
        avatar: 'assets/images/avatars/3.jpg',
        fullname: 'Jhon Doe',
        content: 'I love it!',
    },
    {
        id: 'c309066d-3641-4a3c-86f8-2691e1d0afd5',
        avatar: 'assets/images/avatars/4.jpg',
        fullname: 'Cristian Torres',
        content: 'Me too!',
    },
    {
        id: 'fb15fdb4-f2d7-4489-a6af-a337c981c280',
        avatar: 'assets/images/avatars/5.jpg',
        fullname: 'Alice Cuthbert',
        content: 'I agree with you!',
    },
];

export const sharesData: Share[] = [
    {
        id: '95acc492-9721-4c63-bf23-5006c84e78cc',
        avatar: 'assets/images/avatars/1.jpg',
        fullname: 'Cristian Torres',
        content: 'Wow, this is amazing!',
    },
    {
        id: '4d2e1d12-1297-4237-ae2a-b65d26932be4',
        avatar: 'assets/images/avatars/2.jpg',
        fullname: 'Alice Cuthbert',
        content: 'I agree with you!',
    },
    {
        id: '86477f8d-c57c-46b9-9fc1-981b744ab9e7',
        avatar: 'assets/images/avatars/3.jpg',
        fullname: 'Jhon Doe',
        content: 'I love it!',
    }
];

export const postsData: Post[] = [
    {
        id: '95acc492-9721-4c63-bf23-5006c84e78cc',
        avatar: 'assets/images/avatars/1.jpg',
        fullname: 'Cristian Torres',
        title: 'The best way to spend your weekend',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        thumbnail: 'assets/images/thumbnails/1.jpg',
        images: [
            'assets/images/thumbnails/1.jpg',
            'assets/images/thumbnails/2.jpg',
            'assets/images/thumbnails/3.jpg',
        ],
        createdDate: '2021-09-01T12:00:00',
    },

    {
        id: '95acc492-9721-4c63-bf23-5006c84e78cd',
        avatar: 'assets/images/avatars/1.jpg',
        fullname: 'Cristian Torres',
        title: 'The best way to spend your weekend',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        thumbnail: 'assets/images/thumbnails/1.jpg',
        images: [
            'assets/images/thumbnails/1.jpg',
            'assets/images/thumbnails/2.jpg',
            'assets/images/thumbnails/3.jpg',
        ],
        createdDate: '2021-09-01T12:00:00',
    },

    {
        id: '95acc492-9721-4c63-bf23-5006c84e78cz',
        avatar: 'assets/images/avatars/1.jpg',
        fullname: 'Cristian Torres',
        title: 'The best way to spend your weekend',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        thumbnail: 'assets/images/thumbnails/1.jpg',
        images: [
            'assets/images/thumbnails/1.jpg',
            'assets/images/thumbnails/2.jpg',
            'assets/images/thumbnails/3.jpg',
        ],
        createdDate: '2021-09-01T12:00:00',
    },
];