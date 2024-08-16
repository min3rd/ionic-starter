import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap, take, tap } from 'rxjs';
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
  private _addressBook: BehaviorSubject<AddressBook | null> = new BehaviorSubject<any>(null);
  get addressBooks$(): Observable<AddressBook[]> {
    return this._addressBooks.asObservable();
  }
  get addressBook$(): Observable<AddressBook | null> {
    return this._addressBook.asObservable();
  }
  clear(): void {
    this._addressBook.next(null);
  }

  search(pageable: Pageable): Observable<AddressBook[]> {
    return this.httpClient.get<AddressBook[]>(Endpoint.address_book(), {
      params: new HttpParams({ fromObject: pageable as any }),
    }).pipe(tap(addressBooks => {
      this._addressBooks.next(addressBooks);
    }));
  }
  create(addressBook: AddressBook): Observable<AddressBook> {
    return this._addressBooks.pipe(
      take(1),
      switchMap(addressBooks => this.httpClient.post(Endpoint.address_book(), addressBook).pipe(tap(newAddressBook => {
        this._addressBooks.next([...addressBooks ?? [], newAddressBook]);
        this._addressBook.next(newAddressBook);
        return of(newAddressBook);
      }))));
  }
  get(id: string): Observable<AddressBook> {
    return this.httpClient.get<AddressBook>(Endpoint.address_book(id)).pipe(tap(addressBook => {
      this._addressBook.next(addressBook);
    }));
  }
}
