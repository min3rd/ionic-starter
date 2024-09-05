import { Channel, Film, Notification } from "src/app/core/services/apps/film/film.types";

export const notificationsData: Notification[] = [
    {
        title: 'The Shawshank Redemption',
        subtitle: 'Drama',
        avatar: 'assets/images/avatars/1.jpg',
        thumbnail: 'assets/images/thumbnails/1.jpg',
    },
];

export const filmsData: Film[] = [
    {
        id: 'a5ace987-9c8b-4db4-acd9-ab1351b6370d',
        title: 'Warner Bros. Pictures Warner Bros. Pictures Warner Bros. Pictures Warner Bros. Pictures Warner Bros. Pictures Warner Bros. Pictures Warner Bros. Pictures Warner Bros. Pictures',
        subtitle: 'Drama',
        avatar: 'assets/images/avatars/1.jpg',
        thumbnail: 'assets/images/thumbnails/1.jpg',
        view: 1250000,
        duration: '00:15:56',
        createdDate: "2021-09-01T00:00:00.000Z",
        video: 'assets/videos/1.mp4',
        like: 200450,
    },
];

export const channelsData: Channel[] = [
    {
        id: 'a5ace987-9c8b-4db4-acd9-ab1351b6370d',
        title: 'Warner Bros. Pictures',
        avatar: 'assets/images/avatars/1.jpg',
        description: 'Warner Bros. Pictures',
        view: 1250000,
        subscription: 1250000,
        createdDate: "2021-09-01T00:00:00.000Z",
    }
];