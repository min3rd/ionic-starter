import { inject, Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { Observable, of, switchMap } from 'rxjs';
import { AuthUtils } from './auth.utils';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _storageService = inject(StorageService);
  private _httpClient = inject(HttpClient);
  private _router = inject(Router);
  get accessToken(): string | undefined {
    return this._storageService.get('access_token');
  }
  set accessToken(value: string) {
    this._storageService.set('access_token', value);
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
