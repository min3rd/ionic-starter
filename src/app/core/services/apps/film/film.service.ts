import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { BaseService } from 'src/app/core/base/base.service';
import { Notification } from './film.types';
import { Endpoint } from 'src/app/core/constants/endpoint';

@Injectable({
  providedIn: 'root'
})
export class FilmService extends BaseService {
  private _notifications: BehaviorSubject<Notification[]> = new BehaviorSubject<any>(null);
  get notifications$(): Observable<Notification[]> {
    return this._notifications.asObservable();
  }
  notifications(): Observable<Notification[]> {
    return this.httpClient.get<Notification[]>(Endpoint.film_notifications()).pipe(tap(notifications => {
      this._notifications.next(notifications);
    }));
  }
}
