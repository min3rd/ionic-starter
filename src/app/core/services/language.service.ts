import { inject, Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { StorageKeys } from '../constants/storage.keys';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private _language: BehaviorSubject<string> = new BehaviorSubject('en');
  private _storageService: StorageService = inject(StorageService);
  constructor() {
    this._storageService.get<string>(StorageKeys.language).subscribe(language => {
      this._language.next(language || 'en');
    });
  }
  get language$(): Observable<string> {
    return this._language.asObservable();
  }
  set(language: string) {
    this._language.next(language);
    this._storageService.set(StorageKeys.language, language);
  }
}
