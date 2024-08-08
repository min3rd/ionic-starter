import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storage!: Storage;
  constructor(
    private _storage: Storage,
  ) {
    this.init();
  }
  async init() {
    this.storage = await this._storage.create();
    return this.storage;
  }

  get<T>(key: string): Observable<T> {
    if (!this.storage) {
      return from(this.init().then(() => this.storage.get(key)));
    }
    return from(this.storage.get(key));
  }

  set<T>(key: string, value: T): Observable<void> {
    if (!this.storage) {
      return from(this.init().then(() => this.storage.set(key, value)));
    }
    return from(this.storage.set(key, value));
  }

  clear(): Observable<void> {
    if (!this.storage) {
      return from(this.init().then(() => this.storage.clear()));
    }
    return from(this.storage.clear());
  }
}
