import { Injectable } from "@angular/core";
import { MockApi } from "../../mock-api";
import { cloneDeep } from "lodash-es";
import { commentsData, emojisData, likesData, postsData, sharesData } from "./data";
import { Endpoint } from "src/app/core/constants/endpoint";

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
                let likesCount = this.numbers(0, 100);
                let commentsCount = this.numbers(0, 100);
                let sharesCount = this.numbers(0, 100);
                while (likesCount > 0) {
                    if (!post.likes) {
                        post.likes = [];
                    }
                    post.likes.push({ ...likes[Math.floor(Math.random() * likes.length)], ...{ emoji: emojisData[Math.floor(Math.random() * emojisData.length)] } });
                    likesCount--;
                }
                while (commentsCount > 0) {
                    if (!post.comments) {
                        post.comments = [];
                    }
                    post.comments.push(comments[Math.floor(Math.random() * comments.length)]);
                    commentsCount--;
                }
                while (sharesCount > 0) {
                    if (!post.shares) {
                        post.shares = [];
                    }
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