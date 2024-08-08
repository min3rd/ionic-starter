import { Routes } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";
import { UserComponent } from "./user.component";

export const routes: Routes = [
    {
        path: 'user',
        component: UserComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'profile' },
            {
                path: 'profile',
                component: ProfileComponent,
            }
        ]
    }
];