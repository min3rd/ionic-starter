import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storage: BehaviorSubject<Storage> = new BehaviorSubject<any>(null);
  constructor(
    private _storage: Storage,
  ) {
    this.init();
  }
  async init() {
    this.storage.next(await this._storage.create());
  }
  get<T>(key: string): Promise<T> {
    return this.storage.value.get(key);
  }
  set<T>(key: string, value: T): Promise<void> {
    return this.storage.value.set(key, value);
  }
}
