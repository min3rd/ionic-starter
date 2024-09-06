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
  get posts$(): Observable<Post[]> {
    return this._posts.asObservable();
  }
  posts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(Endpoint.feed_posts()).pipe(tap(posts => {
      this._posts.next(posts);
    }));
  }
}
