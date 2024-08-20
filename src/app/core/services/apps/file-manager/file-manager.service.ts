import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Item } from './file-manager.types';
import { BaseService } from 'src/app/core/base/base.service';
import { Endpoint } from 'src/app/core/constants/endpoint';
import { Pageable } from 'src/app/@vn9melody/types/pageable';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileManagerService extends BaseService {
  private _items: BehaviorSubject<Item[]> = new BehaviorSubject<any>(null);
  private _item: BehaviorSubject<Item> = new BehaviorSubject<any>(null);
  get items$(): Observable<Item[]> {
    return this._items.asObservable();
  }
  get item$(): Observable<Item> {
    return this._item.asObservable();
  }

  search(pageable: Pageable | undefined = undefined): Observable<Item[]> {
    return this.httpClient.get<Item[]>(Endpoint.file_manager(), {
      params: new HttpParams({ fromObject: pageable as any }),
    }).pipe(tap(items => {
      this._items.next(items);
    }));
  }

}
