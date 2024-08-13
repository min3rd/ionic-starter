import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, take, tap } from 'rxjs';
import { Conversation } from './conversation.types';
import { BaseService } from 'src/app/core/base/base.service';
import { Pageable } from 'src/app/@vn9melody/types/pageble';
import { Endpoint } from 'src/app/core/constants/endpoint';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConversationService extends BaseService {
  private _conversations: BehaviorSubject<Conversation[]> = new BehaviorSubject<any>(null);
  get conversions$(): Observable<Conversation[]> {
    return this._conversations.asObservable();
  }
  find(pageable: Pageable) {
    return this._conversations.pipe(
      take(1),
      switchMap(conversations => this.httpClient.get<Conversation[]>(Endpoint.conversation(), {
        params: new HttpParams({ fromObject: pageable as any }),
      }).pipe(tap(newConversations => {
        conversations = [...conversations ?? [], ...newConversations];
        this._conversations.next(conversations);
      })))
    );
  }
}
