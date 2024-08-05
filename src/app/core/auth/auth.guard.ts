import { inject } from '@angular/core';
import { Router, type CanActivateChildFn } from '@angular/router';
import { switchMap, of } from 'rxjs';
import { AuthService } from './auth.service';

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  const router: Router = inject(Router);

  // Check the authentication status
  return inject(AuthService)
    .check()
    .pipe(
      switchMap((authenticated) => {
        // If the user is not authenticated...
        if (!authenticated) {
          // Redirect to the sign-in page with a redirectUrl param
          const redirectURL =
            state.url === '/sign-out'
              ? ''
              : `redirectURL=${state.url}`;
          const urlTree = router.parseUrl(`sign-in?${redirectURL}`);

          return of(urlTree);
        }

        // Allow the access
        return of(true);
      })
    );
};
