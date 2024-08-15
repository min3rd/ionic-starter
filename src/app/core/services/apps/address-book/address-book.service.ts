import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { BaseService } from 'src/app/core/base/base.service';
import { AddressBook } from './address-book.types';
import { Pageable } from 'src/app/@vn9melody/types/pageable';
import { Endpoint } from 'src/app/core/constants/endpoint';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService extends BaseService {
  private _addressBooks: BehaviorSubject<AddressBook[]> = new BehaviorSubject<any>(null);
  private _addressBook: BehaviorSubject<AddressBook> = new BehaviorSubject<any>(null);
  get addressBooks$(): Observable<AddressBook[]> {
    return this._addressBooks.asObservable();
  }
  get addressBook$(): Observable<AddressBook> {
    return this._addressBook.asObservable();
  }

  search(pageable: Pageable): Observable<AddressBook[]> {
    return this.httpClient.get<AddressBook[]>(Endpoint.address_book(), {
      params: new HttpParams({ fromObject: pageable as any }),
    }).pipe(tap(addressBooks => {
      this._addressBooks.next(addressBooks);
    }));
  }
}
