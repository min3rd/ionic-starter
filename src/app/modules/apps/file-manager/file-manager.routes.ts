import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from "@angular/router";
import { FileManagerComponent } from "./file-manager.component";

export const listResolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
};

export const routes: Routes = [
    {
        path: '',
        component: FileManagerComponent,
    }
];