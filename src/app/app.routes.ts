import { Routes } from '@angular/router';
import { noAuthGuard } from './core/auth/no-auth.guard';
import { authGuard } from './core/auth/auth.guard';
import { LayoutComponent } from './core/layout/layout.component';
import { metaDataResolve } from './app.resolve';

export const routes: Routes = [
    { path: '', redirectTo: 'apps', pathMatch: 'full' },
    // noAuth
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
    },

    // User
    {
        path: '',
        canActivateChild: [authGuard],
        component: LayoutComponent,
        data: {
            layout: 'classic',
        },
        resolve: [metaDataResolve],
        loadChildren: () => import('./modules/user/user.routes').then((m) => m.routes),
    },

    // Apps
    {
        path: 'apps',
        canActivateChild: [authGuard],
        component: LayoutComponent,
        data: {
            layout: 'classic',
        },
        resolve: [metaDataResolve],
        loadChildren: () => import('./modules/apps/apps.routes').then((m) => m.routes),
    },
];
