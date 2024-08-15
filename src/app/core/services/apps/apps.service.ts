import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { App } from './apps.types';
import { BaseService } from '../../base/base.service';
import { Endpoint } from '../../constants/endpoint';

@Injectable({
  providedIn: 'root'
})
export class AppsService extends BaseService {
  private _apps: BehaviorSubject<App[]> = new BehaviorSubject<any>(null);
  get apps$(): Observable<App[]> {
    return this._apps.asObservable();
  }

  get(): Observable<App[]> {
    return this.httpClient.get<App[]>(Endpoint.common_apps()).pipe(tap(apps => {
      this._apps.next(apps);
    }));
  }

}
