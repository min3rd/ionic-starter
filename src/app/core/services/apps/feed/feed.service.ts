import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { BaseService } from 'src/app/core/base/base.service';
import { Post } from './feed.types';
import { Endpoint } from 'src/app/core/constants/endpoint';

@Injectable({
  providedIn: 'root'
})
export class FeedService extends BaseService {
  private _posts: BehaviorSubject<Post[]> = new BehaviorSubject<any>(null);
  private _post: BehaviorSubject<Post> = new BehaviorSubject<any>(null);
  get posts$(): Observable<Post[]> {
    return this._posts.asObservable();
  }
  get post$(): Observable<Post> {
    return this._post.asObservable();
  }
  posts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(Endpoint.feed_posts()).pipe(tap(posts => {
      this._posts.next(posts);
    }));
  }

  post(postId: string): Observable<Post> {
    return this.httpClient.get<Post>(Endpoint.feed_posts_id(postId)).pipe(tap(post => {
      this._post.next(post);
    }));
  }
}
