import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { BaseService } from 'src/app/core/base/base.service';
import { Film, Notification } from './film.types';
import { Endpoint } from 'src/app/core/constants/endpoint';
import { Pageable } from 'src/app/@vn9melody/types/pageable';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmService extends BaseService {
  private _notifications: BehaviorSubject<Notification[]> = new BehaviorSubject<any>(null);
  private _films: BehaviorSubject<Film[]> = new BehaviorSubject<any>(null);
  private _film: BehaviorSubject<Film> = new BehaviorSubject<any>(null);
  get notifications$(): Observable<Notification[]> {
    return this._notifications.asObservable();
  }
  get films$(): Observable<Film[]> {
    return this._films.asObservable();
  }
  get film$(): Observable<Film> {
    return this._film.asObservable();
  }
  notifications(): Observable<Notification[]> {
    return this.httpClient.get<Notification[]>(Endpoint.films_notifications()).pipe(tap(notifications => {
      this._notifications.next(notifications);
    }));
  }
  search(pageable: Pageable): Observable<Film[]> {
    return this.httpClient.get<Film[]>(Endpoint.films(), {
      params: new HttpParams({ fromObject: pageable as any })
    }).pipe(tap(films => {
      this._films.next(films);
    }));
  }
  get(id: string): Observable<Film> {
    return this.httpClient.get<Film>(Endpoint.films(id)).pipe(tap(film => {
      this._film.next(film);
    }));
  }
}
