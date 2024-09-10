import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { BaseService } from 'src/app/core/base/base.service';
import { CryptoPair } from './crypto-trading.types';
import { Pageable } from 'src/app/@vn9melody/types/pageable';
import { Endpoint } from 'src/app/core/constants/endpoint';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CryptoTradingService extends BaseService {
  private _cryptoPairs: BehaviorSubject<CryptoPair[]> = new BehaviorSubject<any>(null);
  get cryptoPairs$(): Observable<CryptoPair[]> {
    return this._cryptoPairs.asObservable();
  }
  search(pageable: Pageable | undefined = undefined) {
    return this.httpClient.get<CryptoPair[]>(Endpoint.crypto_trading_crypto_pairs(), { params: new HttpParams({ fromObject: pageable as any }) }).pipe(
      tap(cryptoPairs => {
        this._cryptoPairs.next(cryptoPairs)
      })
    );
  }
}
