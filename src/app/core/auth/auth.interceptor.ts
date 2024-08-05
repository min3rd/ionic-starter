import { HttpErrorResponse, type HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { AuthUtils } from './auth.utils';
import { catchError, throwError } from 'rxjs';
import { CapitalizePipe } from '../pipe/capitalize.pipe';
import { TranslocoService } from '@jsverse/transloco';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService: AuthService = inject(AuthService);
  const capitalizePipe = new CapitalizePipe();
  const translocoService = inject(TranslocoService);
  let newReq = req.clone();
  if (authService.accessToken && !AuthUtils.isTokenExpired(authService.accessToken)) {
    newReq = req.clone({
      headers: req.headers.set(
        'Authorization',
        'Bearer ' + authService.accessToken
      ),
    });
  }
  return next(newReq).pipe(
    catchError((error) => {
      if (error instanceof HttpErrorResponse) {
        // Catch "401 Unauthorized" responses
        if (error.status === 401) {
          // Sign out
          authService.signOut();
        } else {
        }
      }
      return throwError(error);
    })
  );
};
