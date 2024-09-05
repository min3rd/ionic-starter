import { Routes } from "@angular/router";
import { UserComponent } from "./user.component";
import { SignOutComponent } from "../auth/sign-out/sign-out.component";
import { UserNavComponent } from "./user-nav/user-nav.component";
import { ProfileComponent } from "./profile/profile.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { EditProfileComponent } from "./profile/edit-profile/edit-profile.component";
import { ThemeConfiguratorComponent } from "./theme-configurator/theme-configurator.component";
import { LanguageComponent } from "./language/language.component";

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
                path: 'theme-configurator',
                component: ThemeConfiguratorComponent,
            },
            {
                path: 'sign-out',
                component: SignOutComponent,
            },
            {
                path: 'language',
                component: LanguageComponent,
            }
        ]
    }
];