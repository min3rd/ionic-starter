import { Injectable } from "@angular/core";
import { MockApi } from "../../mock-api";
import { cloneDeep } from "lodash-es";
import { commentsData, emojisData, likesData, postsData, sharesData } from "./data";
import { Endpoint } from "src/app/core/constants/endpoint";
import { userData } from "../../common/user/data";

@Injectable({
    providedIn: 'root'
})
export class FeedMockApi extends MockApi {
    override registerHandlers(): void {
        const posts = cloneDeep(postsData);
        const likes = cloneDeep(likesData);
        const comments = cloneDeep(commentsData);
        const shares = cloneDeep(sharesData);
        this.mockupApiService.onGet(Endpoint.feed_posts()).reply(({ request }) => {
            return [200, posts.map(post => {
                let likesCount = this.numbers(0, 10000);
                let commentsCount = this.numbers(0, 10000);
                let sharesCount = this.numbers(0, 10000);
                post.likes = [];
                post.comments = [];
                post.shares = [];

                while (likesCount > 0) {
                    post.likes.push({ ...likes[Math.floor(Math.random() * likes.length)], ...{ emoji: emojisData[Math.floor(Math.random() * emojisData.length)] } });
                    likesCount--;
                }
                if (Math.random() > 0.5) {
                    post.likes.push({ ...likes[Math.floor(Math.random() * likes.length)], ...{ userId: userData.id }, ...{ emoji: emojisData[Math.floor(Math.random() * emojisData.length)] } });
                }
                while (commentsCount > 0) {
                    post.comments.push(comments[Math.floor(Math.random() * comments.length)]);
                    commentsCount--;
                }
                while (sharesCount > 0) {
                    post.shares.push(shares[Math.floor(Math.random() * shares.length)]);
                    sharesCount--;
                }
                return post;
            })];
        });
    }
    numbers(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}