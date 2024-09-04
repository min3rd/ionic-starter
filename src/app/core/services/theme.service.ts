import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { StorageKeys } from '../constants/storage.keys';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _theme: BehaviorSubject<string> = new BehaviorSubject('light');
  private _storageService: StorageService = inject(StorageService);
  constructor() {
    this._storageService.get<string>(StorageKeys.theme).subscribe(theme => {
      if (theme) {
        this.set(theme);
      }
    });
  }
  get theme$(): Observable<string> {
    return this._theme.asObservable();
  }
  set(theme: string) {
    this._theme.next(theme);
    this._storageService.set(StorageKeys.theme, theme);
  }
}
