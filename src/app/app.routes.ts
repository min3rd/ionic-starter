import { Routes } from '@angular/router';
import { noAuthGuard } from './core/auth/no-auth.guard';
import { authGuard } from './core/auth/auth.guard';
import { LayoutComponent } from './core/layout/layout.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    // Auth
    {
        path: '',
        canActivateChild: [noAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        loadChildren: () => import('./modules/auth/auth.routes').then((m) => m.routes),
    },
    // Admin
    {
        path: '',
        canActivateChild: [authGuard],
        component: LayoutComponent,
        data: {
            layout: 'classic',
        },
        loadChildren: () => import('./modules/admin/admin.routes').then((m) => m.routes),
    }
];
