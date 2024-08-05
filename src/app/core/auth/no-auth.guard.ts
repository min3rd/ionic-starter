import { inject } from '@angular/core';
import { Router, type CanActivateChildFn } from '@angular/router';
import { switchMap, of } from 'rxjs';
import { AuthService } from './auth.service';

export const noAuthGuard: CanActivateChildFn = (childRoute, state) => {
  const router: Router = inject(Router);

  // Check the authentication status
  return inject(AuthService)
    .check()
    .pipe(
      switchMap((authenticated) => {
        // If the user is authenticated...
        if (authenticated) {
          return of(router.parseUrl(''));
        }

        // Allow the access
        return of(true);
      })
    );
};
