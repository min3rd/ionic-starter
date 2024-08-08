import { Routes } from "@angular/router";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignOutComponent } from "./sign-out/sign-out.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

export const routes: Routes = [
    { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
    {
        path: 'sign-in',
        component: SignInComponent,
    },
    {
        path: 'sign-out',
        component: SignOutComponent,
    },
    {
        path: 'sign-up',
        component: SignUpComponent,
    }
];