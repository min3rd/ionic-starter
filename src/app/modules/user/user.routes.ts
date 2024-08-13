import { Routes } from "@angular/router";
import { UserComponent } from "./user.component";
import { SignOutComponent } from "../auth/sign-out/sign-out.component";
import { UserNavComponent } from "./user-nav/user-nav.component";
import { ProfileComponent } from "./profile/profile.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { EditProfileComponent } from "./profile/edit-profile/edit-profile.component";

export const routes: Routes = [
    {
        path: 'user',
        component: UserComponent,
        children: [
            {
                path: '',
                component: UserNavComponent,
            },
            {
                path: 'profile',
                component: ProfileComponent,
            },
            {
                path: 'profile/edit',
                component: EditProfileComponent,
            },
            {
                path: 'change-password',
                component: ChangePasswordComponent,
            },
            {
                path: 'sign-out',
                component: SignOutComponent,
            }
        ]
    }
];