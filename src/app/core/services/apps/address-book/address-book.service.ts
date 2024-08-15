import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseService } from 'src/app/core/base/base.service';
import { AddressBook } from './address-book.types';
import { Pageable } from 'src/app/@vn9melody/types/pageable';

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

  search(pageable: Pageable) {

  }
}
