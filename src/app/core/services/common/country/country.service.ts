import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { BaseService } from 'src/app/core/base/base.service';
import { Country } from './country.types';
import { Endpoint } from 'src/app/core/constants/endpoint';

@Injectable({
  providedIn: 'root'
})
export class CountryService extends BaseService {
  private _countries: BehaviorSubject<Country[]> = new BehaviorSubject<any>(null);
  get countries$(): Observable<Country[]> {
    return this._countries.asObservable();
  }
  get(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(Endpoint.common_countries()).pipe(tap(countries => {
      this._countries.next(countries);
    }));
  }
}
