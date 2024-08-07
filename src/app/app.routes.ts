import { Routes } from '@angular/router';
import { noAuthGuard } from './core/auth/no-auth.guard';
import { authGuard } from './core/auth/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    // Auth
    {
        path: '',
        canActivateChild: [noAuthGuard],
        loadChildren: () => import('./modules/auth/auth.routes').then((m) => m.routes),
    },
    // Admin
    {
        path: '',
        canActivateChild: [authGuard],
        loadChildren: () => import('./modules/admin/admin.routes').then((m) => m.routes),
    }
];
