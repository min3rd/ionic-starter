import { inject, Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { AuthUtils } from './auth.utils';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { StorageKeys } from '../constants/storage.keys';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _storageService = inject(StorageService);
  private _httpClient = inject(HttpClient);
  private _router = inject(Router);
  private _accessToken: string | undefined;

  constructor() {
    this._storageService.storage.subscribe((storage) => {
      if (!storage) {
        return;
      }
      storage.get(StorageKeys.accessToken).then((accessToken) => {
        this._accessToken = accessToken;
        console.log(accessToken);
      });
    });
  }
  get accessToken(): string | undefined {
    return this._accessToken;
  }

  set accessToken(value: string) {
    this._accessToken = value;
    this._storageService.set(StorageKeys.accessToken, value);
  }

  signIn(credentials: { email: string; password: string; rememberme: boolean; }): Observable<boolean> {
    // Simulate the authentication
    return this._httpClient.post('api/auth/sign-in', credentials).pipe(
      switchMap((response: any) => {
        // Store the access token in the local storage
        this.accessToken = response.accessToken;

        // Return a new observable with the response
        return of(response);
      })
    );
  }

  signOut() {
    this._router.navigate(['/auth/sign-out']);
  }

  /**
 * Check the authentication status
 */
  check(): Observable<boolean> {
    // Check the access token availability
    if (!this.accessToken) {
      return of(false);
    }

    // Check the access token expire date
    if (AuthUtils.isTokenExpired(this.accessToken)) {
      return of(false);
    }
    return of(true);
  }
}
