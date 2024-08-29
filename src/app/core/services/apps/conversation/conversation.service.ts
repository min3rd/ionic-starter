import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, take, tap } from 'rxjs';
import { Conversation, Message } from './conversation.types';
import { BaseService } from 'src/app/core/base/base.service';
import { Pageable } from 'src/app/@vn9melody/types/pageable';
import { Endpoint } from 'src/app/core/constants/endpoint';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConversationService extends BaseService {
  private _conversations: BehaviorSubject<Conversation[]> = new BehaviorSubject<any>(null);
  private _conversation: BehaviorSubject<Conversation> = new BehaviorSubject<any>(null);
  private _messages: BehaviorSubject<Message[]> = new BehaviorSubject<any>(null);
  get conversions$(): Observable<Conversation[]> {
    return this._conversations.asObservable();
  }
  get conversation$(): Observable<Conversation> {
    return this._conversation.asObservable();
  }
  get messages$(): Observable<Message[]> {
    return this._messages.asObservable();
  }
  search(pageable: Pageable): Observable<Conversation[]> {
    return this._conversations.pipe(
      take(1),
      switchMap(conversations => this.httpClient.get<Conversation[]>(Endpoint.conversation(), {
        params: new HttpParams({ fromObject: pageable as any }),
      }).pipe(tap(newConversations => {
        this._conversations.next(newConversations);
      })))
    );
  }
  get(conversationId: string): Observable<Conversation> {
    return this.httpClient.get<Conversation>(Endpoint.conversation_id(conversationId)).pipe(tap(conversation => {
      this._conversation.next(conversation);
    }));
  }
  messages(conversationId: string, pageable: Pageable): Observable<Message[]> {
    return this._messages.pipe(
      take(1),
      switchMap(messages => this.httpClient.get<Message[]>(Endpoint.conversation_id_messages(conversationId), {
        params: new HttpParams({ fromObject: pageable as any }),
      }).pipe(tap(newMessages => {
        this._messages.next(newMessages);
      }))
      ));
  }
}
