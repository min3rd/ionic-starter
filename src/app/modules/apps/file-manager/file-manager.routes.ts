import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from "@angular/router";
import { FileManagerComponent } from "./file-manager.component";
import { FileManagerService } from "src/app/core/services/apps/file-manager/file-manager.service";
import { inject } from "@angular/core";
import { getParam } from "src/app/core/utils/functions";

const listResolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const fileManagerService: FileManagerService = inject(FileManagerService);
    return fileManagerService.search({
        query: getParam(route, 'folderId'),
    });
};

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'null' },
    {
        path: ':folderId',
        component: FileManagerComponent,
        resolve: [listResolve],
    }
];