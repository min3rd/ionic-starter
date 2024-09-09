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
        let posts = cloneDeep(postsData);
        let likes = cloneDeep(likesData);
        let comments = cloneDeep(commentsData);
        let shares = cloneDeep(sharesData);
        posts = posts.map(post => {
            let likesCount = this.numbers(1, 10);
            let commentsCount = this.numbers(1, 10);
            let sharesCount = this.numbers(1, 10);
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
                let comment = cloneDeep(comments[Math.floor(Math.random() * comments.length)]);
                comment.replies = [];
                let replyCount = this.numbers(1, 10);
                while (replyCount > 0) {
                    comment.replies.push(comments[Math.floor(Math.random() * comments.length)]);
                    replyCount--;
                }
                post.comments.push(comment);
                commentsCount--;
            }
            while (sharesCount > 0) {
                post.shares.push(shares[Math.floor(Math.random() * shares.length)]);
                sharesCount--;
            }
            return post;
        })
        this.mockupApiService.onGet(Endpoint.feed_posts()).reply(({ request }) => {
            return [200, posts];
        });

        posts.forEach(post => {
            this.mockupApiService.onGet(Endpoint.feed_posts_id(post.id)).reply(({ request }) => {
                return [200, post];
            });
        });
    }
    numbers(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}